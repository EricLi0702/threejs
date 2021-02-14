
import * as THREE from 'three';

export function GetRayCastObject(self, mouseX, mouseY, meshArr) {
	self.mouse.x = ( mouseX / self.cWidth ) * 2 - 1;
	self.mouse.y = - ( mouseY / self.cHeight ) * 2 + 1;

	self.raycaster.setFromCamera( self.mouse, self.camera );
	return self.raycaster.intersectObjects( meshArr )[0];
}

export const hotColor = {
	K4:0xFF0000,
	K5:0x00FF00,
	K6:0x0000FF,
	K7:0xFFFF00,
	K8:0xFF00FF,
	K9:0x00FFFF,
}

export const linkInfoArr = [
	{objUrl:'http://www.africau.edu/images/default/sample.pdf'},
	{objUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'},
]
