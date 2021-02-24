import React from 'react';
import jQuery from 'jquery';
import * as THREE from 'three';
import {Tween, autoPlay, Easing} from "es6-tween";

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import {GetRayCastObject} from "./common";
import {sceneData} from './sceneData';
import '../assets/css/main.css';

autoPlay(true);
const easeTime = 500, easeType = Easing.Cubic.InOut;

export default class HomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.cWidth = jQuery(window).width();  this.mouseX = 0;
		this.cHeight = jQuery(window).height();this.mouseY = 0;
		this.raycaster = new THREE.Raycaster(); this.mouse = new THREE.Vector2();
		this.animate = this.animate.bind(this);
		this.modalWrapper = React.createRef(null);
		this.state = {selScene:'K9', overTarget:null, overPoint:null, selModal:null, loading:true};
		this.hotspotArr = []; this.pointArr = [];
		this.device = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )?"mobile":"web";
	}

	componentDidMount() {
		this.initScene();
		this.loadScene();
		this.animate();
		this.setCanvasSize();
		window.addEventListener( 'resize', this.setCanvasSize);
		window.addEventListener( 'click', this.mouseClick, false );
		window.addEventListener( 'pointerdown', this.mouseDown, false );
		window.addEventListener( 'pointermove', this.mouseMove, false );
		window.addEventListener( 'pointerup', this.mouseUp, false );
		window.addEventListener("touchstart", this.mouseDown, false);
		window.addEventListener("touchmove", this.mouseMove, false);
		window.addEventListener("touchend", this.touchEnd, false);
		// window.addEventListener("touchcancel", this.mouseUp, false);
	}

	openWindow=(url)=> {
		const modalWidth = this.cWidth * 0.8;
		const modalHeight = this.cHeight * 0.8;
		const left = this.cWidth * 0.1;
		const top = this.cHeight * 0.1 + 50;
		console.log('-----------',left)
		console.log('++++++++++++',top)
		let condition = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${modalWidth}, height=${modalHeight}, top=${top}, left=${left}`
		console.log('*********',condition)
		var myWindow = window.open(url, '', condition);
	 }

	componentWillUnmount() {
    }

	setMouseStyle=()=>{
		const {overPoint, overTarget} = this.state;
		jQuery("#container").css("cursor", overPoint || overTarget?'pointer':'default' );
	}

	mouseMove=(e)=>{
		if (this.state.selModal) return;
		if (this.mouseStatus === "down" || this.mouseStatus === "drag") {this.mouseStatus = "drag"; return;}
		const intersectTarget = GetRayCastObject(this, e.clientX, e.clientY, this.hotspotArr);
		const overTarget = intersectTarget?intersectTarget.object.target:null;
		if (overTarget !== this.state.overTarget) {
			this.hotspotArr.forEach(hotspot => {
				new Tween(hotspot.material).to({ 'opacity': hotspot.target === overTarget?1: 0.5 }, 300).easing(easeType).start();
			});
			this.setState({overTarget}, ()=>this.setMouseStyle());
		}
		const intersectPoint = GetRayCastObject(this, e.clientX, e.clientY, this.pointArr);
		const overPoint = intersectPoint?intersectPoint.object.object:null;
		if (overPoint !== this.state.overPoint) {
			this.setState({overPoint}, ()=>this.setMouseStyle());
		}
	}

	touchEnd=(e)=>{
		if (this.mouseStatus === "drag") return;
		if (this.device === "mobile") {
			const mouseX = e.changedTouches[0].pageX;
			const mouseY = e.changedTouches[0].pageY;
	
			const intersectTarget = GetRayCastObject(this, mouseX, mouseY, this.hotspotArr);
			const overTarget = intersectTarget?intersectTarget.object.target:null;

			const intersectPoint = GetRayCastObject(this, mouseX, mouseY, this.pointArr);
			const overPoint = intersectPoint?intersectPoint.object.object:null;
			this.setState({overTarget, overPoint}, ()=>{
				this.mouseClick();
			});
		}
		this.mouseStatus = "up";
	}

	mouseClick=(e)=>{
		var {overTarget, overPoint, selScene, selModal} = this.state;
		if (selModal || this.transScene === true) return;
		if (overTarget) {
			this.setState({selScene: overTarget});
			this.totalGroup.children.forEach(mesh => {
				if (mesh.sceneName === overTarget) {
					mesh.visible = true;
					this.hotspotArr = mesh.children[0].children;
					this.pointArr = mesh.children[1].children;
					this.camera.position.set(mesh.camPos.x, 0, mesh.camPos.z);
				}
				else mesh.visible = false;
			});
		}
		else if (overPoint) {
			const pointMesh = this.pointArr.find(mesh=>mesh.object===overPoint);
			this.setState({overPoint:null});
			if (pointMesh.url) this.setModal({url:pointMesh.url});
			else if (pointMesh.src) this.openWindow(pointMesh.src);
		}
	}

	loadImage = (url) => {
		return new Promise((resolve, reject) => {
			new THREE.TextureLoader().load(url, (texture) => {
				resolve(texture);
			}, null, (error) => {
				reject(error);
			});
		})
	}

	loadScene=async ()=>{
		const {selScene} = this.state;
		for(let i = 0; i < sceneData.length; i++) {
			const item = sceneData[i];
			const backMap = await this.loadImage(item.backImg);
			const backGeo = new THREE.SphereGeometry(10, 128, 128);
			const backMat = new THREE.MeshBasicMaterial({map:backMap, side:2, transparent:true, opacity:1});
			var backMesh = new THREE.Mesh(backGeo, backMat);
			backMesh.visible = item.name === selScene?true:false;
			backMesh.sceneName = item.name;
			backMesh.camPos = item.camPos;
			this.totalGroup.add(backMesh);
			var hotspotGroup = new THREE.Group(); backMesh.add(hotspotGroup);
			item.hotspots.forEach(hotspot => {
				const colVal = 0xFFFFFF;
				const hotGeo = new THREE.CylinderGeometry(1, 1, 0.01, 32);
				const hotMat = new THREE.MeshBasicMaterial({color:colVal, transparent:true, opacity:0.5});
				const hotMesh = new THREE.Mesh(hotGeo, hotMat);
				hotMesh.target = hotspot.target;
				hotMesh.hotId = hotspot.id;
				hotMesh.position.set(hotspot.pos.x, hotspot.pos.y, -hotspot.pos.z);
				if (hotspot.scl) { hotMesh.scale.set(hotspot.scl, 1, hotspot.scl); }
				hotspotGroup.add(hotMesh);
			});
			var pointGroup = new THREE.Group(); backMesh.add(pointGroup);
			item.points.forEach(point => {
				const pointGeo = point.shape === 'circle'?new THREE.CylinderGeometry(1, 1, 0.01, 32): new THREE.BoxGeometry(1, 1, 0.1);
				const pointMat = new THREE.MeshLambertMaterial({color:0xFFFFFF, side:2, transparent:false, opacity:1, depthTest:false});
				const pointMesh = new THREE.Mesh(pointGeo, pointMat);
				pointMesh.position.set(point.pos.x, point.pos.y, point.pos.z);
				pointMesh.url=point.url;
				pointMesh.src=point.src;
				pointMesh.object=point.object;
				pointMesh.type=point.type;
				pointMesh.visible = false;
				if (point.scale) { pointMesh.scale.set(point.scale.x, point.scale.y, point.scale.z); }
				if (point.rot) { pointMesh.rotation.set(point.rot.x, point.rot.y, point.rot.z); }
				pointGroup.add(pointMesh);
			});
			if (item.name === selScene) {
				this.hotspotArr = hotspotGroup.children;
				this.pointArr = pointGroup.children;
			}
		}
		this.setState({loading:false});
	}

	setModal=(value)=>{
		this.controls.enabled = value !== null?false:true;
		this.setMouseStyle();
		this.setState({selModal:value});
	}

	initScene=()=>{
		this.renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
		this.renderer.setSize(this.cWidth, this.cHeight);
		if (!document.getElementById("container")) return false;
		document.getElementById("container").appendChild(this.renderer.domElement);
		this.renderer.setClearColor(0xD8D8D8, 1);

		this.camera = new THREE.PerspectiveCamera(60, this.cWidth / this.cHeight, 0.01, 100);
		this.camera.position.set(-2, 0, -0.8);
		this.scene = new THREE.Scene();
		this.totalGroup = new THREE.Group(); this.scene.add(this.totalGroup);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.minDistance = 0.1; this.controls.maxDistance = 5; 

		const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.3 ); this.scene.add( ambientLight );
		this.mainLight = new THREE.DirectionalLight( 0xFFFFFF, 0.9 ); this.scene.add( this.mainLight );
		this.mainLight.position.set(50, 50, 50);
	}
	mouseDown=(e)=>{
		this.mouseStatus = "down";
		if (this.modalWrapper && this.modalWrapper.current && !this.modalWrapper.current.contains(e.target)) {
			this.setModal(null);
		}
	}
	mouseUp=(e)=>{
		this.mouseStatus = "up";
		// new Tween(this.camera).to( {'position.x':0, 'position.y':0.5, 'position.z':2}, easeTime ).easing(easeType).start();
	}

	animate=()=>{
		if (!this.camera || !this.scene) return;
		requestAnimationFrame(this.animate);
		this.camera.lookAt( 0, 0, 0 );
		this.renderer.render(this.scene, this.camera);
	}

	setCanvasSize = () => {
		this.cWidth = jQuery(window).width();
		this.cHeight = jQuery(window).height();
		if (this.renderer && this.camera) {
			this.renderer.setSize(this.cWidth, this.cHeight);
			this.camera.aspect = this.cWidth/this.cHeight;
			this.camera.updateProjectionMatrix();
		}
	}

	render() {
		const {loading, selModal} = this.state;
		return (
			<div className="home">
				<div id="container"></div>
				{selModal !== null &&
					<div className='modal-wrapper'>
						<div id="detailModal" ref={this.modalWrapper}>
							{selModal.url && <iframe src={selModal.url} allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; encrypted-media"></iframe>}
							{selModal.src && <img src={selModal.src}></img>}
						</div> 
					</div>
				}
				{loading === true &&
					<div id='loading'>
						<div className='item left top'></div>
						<div className='item left top'></div>
						<div className='item right top'></div>
						<div className='item left bottom'></div>
						<div className='item right bottom'></div>
					</div>
				}
			</div>
		);
	}
}
