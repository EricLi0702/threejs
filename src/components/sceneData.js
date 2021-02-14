
import ImgK4 from '../assets/images/big_K4.jpg';
import ImgK5 from '../assets/images/big_K5.jpg';
import ImgK6 from '../assets/images/big_K6.jpg';
import ImgK7 from '../assets/images/big_K7.jpg';
import ImgK8 from '../assets/images/big_K8.jpg';
import ImgK9 from '../assets/images/big_K9.jpg';

// import imgK6Indiv from '../assets/images/portfolio-projekte-individuelle-bauweise.jpg';
// import imgK6Misch from '../assets/images/portfolio-projekte-mischbauweise.jpg';
// import imgK6Stock from '../assets/images/portfolio-projekte-stockstaende.jpg';
// import imgK6System from '../assets/images/portfolio-projekte-systemstandbau.jpg';

const srcK6Indiv = 'https://www.messebau-planung.at/de/portfolio-projekte-individuelle-bauweise';
const srcK6Misch = 'https://www.messebau-planung.at/de/portfolio-projekte-mischbauweise';
const srcK6System = 'https://www.messebau-planung.at/de/portfolio-projekte-systemstandbau';
const srcK6Stock = 'https://www.messebau-planung.at/de/portfolio-projekte-stockstaende';

const testVideoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const testPdfUrl = 'http://messe.plato.exposed/test3d/source/Virtueller-Messestand_MbP_Full-Service_11-02-2021.pdf';

const pdfK4Url = 'http://messe.plato.exposed/test3d/source/Virtueller-Messestand_MbP.pdf';
const videoK7Url = 'http://messe.plato.exposed/test3d/source/MesseBauPlanung_GmbH.mp4';

export const sceneData = [
	{
		name: 'K4',
		backImg: ImgK4,
		hotspots: [
			{id:'', target:'K5', pos:{x:2.7, y:-1.8, z:-8.5}, scl:0.5},
			{id:'', target:'K6', pos:{x:4, y:-3.3, z: -7}, scl:0.9},
			{id:'', target:'K7', pos:{x:7, y:-3.3, z:3.5}, scl:0.9},
			{id:'', target:'K8', pos:{x:-1.8, y:-2, z:-8.1}, scl:0.5},
			{id:'', target:'K9', pos:{x:-7, y:-2.2, z:5}, scl:0.8},
		],
		points: [
			{id:'', object:'K40', shape:'circle', pos:{x:-2.8, y:-4, z:-7.3}, scale:{x:1.2, y:1, z:1.2}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K41', shape:'circle', pos:{x:0, y:-3.3, z:-8.5}, scale:{x:1, y:1, z:1}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K6_indiv', pos:{x:6.2, y:0.5, z:7.5}, scale:{x:1.5, y:1, z:1}, rot:{x:0, y:1.5, z:0}, src:srcK6Indiv},
			{id:'', object:'K6_misch', pos:{x:5.1, y:0.5, z:8.2}, scale:{x:1.5, y:1, z:1}, rot:{x:0, y:1.6, z:0}, src:srcK6Misch},
			{id:'', object:'K6_system', pos:{x:6, y:-1.2, z:7.5}, scale:{x:1.5, y:1, z:1}, rot:{x:0, y:1.5, z:0}, src:srcK6System},
			{id:'', object:'K6_stock', pos:{x:5.2, y:-1, z:8.2}, scale:{x:1.5, y:1, z:1}, rot:{x:0, y:1.6, z:0}, src:srcK6Stock},
			{id:'', object:'K70', pos:{x:9.3, y:1, z:-2.2}, scale:{x:2.4, y:1.6, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
			{id:'', object:'K80', pos:{x:0.7, y:-0.5, z:9.8}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K81', pos:{x:-0.1, y:-0.5, z:9.8}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K82', pos:{x:-0.9, y:-0.5, z:9.8}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K83', pos:{x:-1.6, y:-0.5, z:9.8}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
		],
		camPos:{x:0, z:3}
	}, {
		name: 'K5',
		backImg: ImgK5,
		hotspots: [
			{id:'', target:'K4', pos:{x:-2, y:-1.5, z:8}, scl:0.4},
			{id:'', target:'K6', pos:{x:-1, y:-2.5, z:6}, scl:0.6},
			{id:'', target:'K8', pos:{x:-7.5, y:-3.5, z: 3.5}, scl:0.9},
		],
		points: [
			{id:'', object:'K50', pos:{x:8.5, y:0.9, z:-2.3}, scale:{x:4, y:3, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
		],
		camPos:{x:-3, z:0}
	}, {
		name: 'K6',
		backImg: ImgK6,
		hotspots: [
			{id:'', target:'K4', pos:{x:0, y:-2.8, z:8.8}, scl: 0.7},
			{id:'', target:'K5', pos:{x:3, y:-3, z:-7}, scl: 0.8},
			// {id:'', target:'K7', pos:{x: 1, y:hotspotYVal, z:-1}},
			{id:'', target:'K8', pos:{x:-5.5, y:-3.8, z:-5.5}, scl:0.7},
			{id:'', target:'K9', pos:{x:-4, y:-1, z:8}, scl:0.3},
		],
		points: [
			{id:'', object:'K40', shape:'circle', pos:{x:-2.4, y:-1.3, z:-9}, scale:{x:0.4, y:1, z:0.4}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K41', shape:'circle', pos:{x:-1.2, y:-1.2, z:-9.5}, scale:{x:0.4, y:1, z:0.4}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K6_indiv', pos:{x:8.8, y:1.1, z:-2.6}, scale:{x:3, y:2, z:1}, rot:{x:0, y:1.5, z:0}, src:srcK6Indiv},
			{id:'', object:'K6_misch', pos:{x:9.1, y:1.1, z:2}, scale:{x:3, y:2, z:1}, rot:{x:0, y:1.6, z:0}, src:srcK6Misch},
			{id:'', object:'K6_system', pos:{x:8.5, y:-2.3, z:-2.5}, scale:{x:3, y:2, z:1}, rot:{x:0, y:1.5, z:0}, src:srcK6System},
			{id:'', object:'K6_stock', pos:{x:8.7, y:-2.4, z:2}, scale:{x:3, y:2, z:1}, rot:{x:0, y:1.6, z:0}, src:srcK6Stock},
			{id:'', object:'K70', pos:{x:6.2, y:0.8, z:-7}, scale:{x:1.8, y:1.2, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
			{id:'', object:'K80', pos:{x:-0.4, y:-0.9, z:9.8}, scale:{x:1, y:0.7, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K81', pos:{x:-1.7, y:-0.9, z:9.6}, scale:{x:0.9, y:0.6, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K82', pos:{x:-3, y:-0.9, z:9.3}, scale:{x:1, y:0.7, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K83', pos:{x:-4.1, y:-0.9, z:8.8}, scale:{x:1, y:0.7, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
		],
		camPos:{x:-3, z:0}
	}, {
		name: 'K7',
		backImg: ImgK7,
		hotspots: [
			{id:'', target:'K4', pos:{x:-6, y:-3.5, z:-4}, scl: 1},
			// {id:'', target:'K5', pos:{x:-1, y:hotspotYVal, z:-1}},
			// {id:'', target:'K6', pos:{x:-1, y:hotspotYVal, z: 1}},
			{id:'', target:'K8', pos:{x:-4.2, y:-1.7, z:-8.6}, scl: 0.3},
			{id:'', target:'K9', pos:{x:-6, y:-1, z:6}, scl:0.5},
		],
		points: [
			{id:'', object:'K40', shape:'circle', pos:{x:-8.5, y:-1.8, z:0.5}, scale:{x:0.5, y:1, z:0.5}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K41', shape:'circle', pos:{x:-8.7, y:-2.4, z:-1.3}, scale:{x:0.5, y:1, z:0.5}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K70', pos:{x:8.7, y:2.1, z:1.1}, scale:{x:5.1, y:2.7, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
			{id:'', object:'K80', pos:{x:-2.1, y:-0.4, z:9.7}, scale:{x:0.5, y:0.3, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K81', pos:{x:-2.5, y:-0.4, z:9.2}, scale:{x:0.5, y:0.3, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K82', pos:{x:-3.1, y:-0.4, z:9.2}, scale:{x:0.5, y:0.3, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
			{id:'', object:'K83', pos:{x:-3.8, y:-0.4, z:9.2}, scale:{x:0.5, y:0.3, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
		],
		camPos:{x:-3, z:0}
	}, {
		name: 'K8',
		backImg: ImgK8,
		hotspots: [
			{id:'', target:'K4', pos:{x:-8, y:-2, z:-1.5}, scl:0.6},
			{id:'', target:'K5', pos:{x:5, y:-4, z:6}, scl:1},
			{id:'', target:'K6', pos:{x:-6, y:-4, z: 4}, scl:1},
			// {id:'', target:'K7', pos:{x: 1, y:hotspotYVal, z:-1}},
			{id:'', target:'K9', pos:{x:-8, y:-1, z:-3}, scl:0.4},
		],
		points: [
			{id:'', object:'K40', shape:'circle', pos:{x:-9, y:-0.9, z:0.6}, scale:{x:0.3, y:1, z:0.3}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K41', shape:'circle', pos:{x:-9, y:-0.9, z:-0.1}, scale:{x:0.3, y:1, z:0.3}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K50', pos:{x:1.8, y:0.6, z:-9.4}, scale:{x:2.4, y:1.8, z:1}, rot:{x:0, y:0, z:0}, url:videoK7Url},
			{id:'', object:'K6_indiv', pos:{x:-6.1, y:0.5, z:-7.2}, scale:{x:1.8, y:1.2, z:1}, rot:{x:0, y:0, z:0}, src:srcK6Indiv},
			{id:'', object:'K6_misch', pos:{x:-4.1, y:0.7, z:-8.5}, scale:{x:1.8, y:1.2, z:1}, rot:{x:0, y:0, z:0}, src:srcK6Misch},
			{id:'', object:'K6_system', pos:{x:-6.1, y:-1.4, z:-7.2}, scale:{x:1.8, y:1.2, z:1}, rot:{x:0, y:0, z:0}, src:srcK6System},
			{id:'', object:'K6_stock', pos:{x:-4.1, y:-1.6, z:-8.4}, scale:{x:2, y:1.5, z:1}, rot:{x:0, y:0, z:0}, src:srcK6Stock},
			{id:'', object:'K70', pos:{x:-7.4, y:0.6, z:-5.7}, scale:{x:1.6, y:1, z:1}, rot:{x:0, y:0, z:0}, url:videoK7Url},
			{id:'', object:'K80', pos:{x:9.4, y:-1.3, z:-2}, scale:{x:1.4, y:0.8, z:1}, rot:{x:0, y:1.57, z:0}, url:testPdfUrl},
			{id:'', object:'K81', pos:{x:9.8, y:-1.4, z:0.1}, scale:{x:1.4, y:0.8, z:1}, rot:{x:0, y:1.57, z:0}, url:testPdfUrl},
			{id:'', object:'K82', pos:{x:9.4, y:-1.3, z:2.2}, scale:{x:1.4, y:0.8, z:1}, rot:{x:0, y:1.57, z:0}, url:testPdfUrl},
			{id:'', object:'K83', pos:{x:8.8, y:-1.2, z:4}, scale:{x:1.2, y:0.8, z:1}, rot:{x:0, y:1.4, z:0}, url:testPdfUrl},
		],
		camPos:{x:-3, z:0}
	}, {
		name: 'K9',
		backImg: ImgK9,
		hotspots: [
			{id:'', target:'K4', pos:{x:9, y:-2, z:-2.4}, scl:0.5},
			{id:'', target:'K5', pos:{x:7, y:-1.1, z:-6}, scl:0.35},
			// {id:'', target:'K6', pos:{x:-1, y:hotspotYVal, z: 1}},
			// {id:'', target:'K7', pos:{x: 1, y:hotspotYVal, z:-1}},
			{id:'', target:'K8', pos:{x:6, y:-1.4, z:-7}, scl:0.4},
		],
		points: [
			{id:'', object:'K40', shape:'circle', pos:{x:9, y:-1, z:0.6}, scale:{x:0.3, y:1, z:0.3}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K41', shape:'circle', pos:{x:9, y:-0.9, z:-0.1}, scale:{x:0.3, y:1, z:0.3}, rot:{x:0, y:0, z:0}, url:pdfK4Url},
			{id:'', object:'K50', pos:{x:8, y:0.2, z:5.6}, scale:{x:0.5, y:0.7, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
			{id:'', object:'K6_indiv', pos:{x:8.9, y:0.2, z:4.6}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:1.57, z:0}, src:srcK6Indiv},
			{id:'', object:'K6_misch', pos:{x:8.5, y:0.2, z:5.3}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:1.57, z:0}, src:srcK6Misch},
			{id:'', object:'K6_system', pos:{x:8.9, y:-0.4, z:4.6}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:1.57, z:0}, src:srcK6System},
			{id:'', object:'K6_stock', pos:{x:8.5, y:-0.4, z:5.3}, scale:{x:0.6, y:0.4, z:1}, rot:{x:0, y:1.57, z:0}, src:srcK6Stock},
			{id:'', object:'K70', pos:{x:9.5, y:0.5, z:0.5}, scale:{x:1, y:0.6, z:1}, rot:{x:0, y:1.57, z:0}, url:videoK7Url},
			{id:'', object:'K80', pos:{x:5.1, y:-0.3, z:7.8}, scale:{x:2, y:0.3, z:1}, rot:{x:0, y:0, z:0}, url:testPdfUrl},
		],
		camPos:{x:-3, z:0}
	},
]
