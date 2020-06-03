import * as THREE from "three"

var scene = new THREE.Scene();

//var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var camera =new THREE.OrthographicCamera(-100,100,100,-100,-1000,1000)
camera.rotateY(Math.PI/4)
//camera.rotateZ(0.3)

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#fff");
renderer.setSize( 1000,1000 );
document.body.appendChild( renderer.domElement );


// var geometry = new THREE.RingGeometry( clockRadius, clockRadius+1.5, 360 );
// var material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
// var mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

var radius = 80;
var height = 100;


var geometry = new THREE.CylinderGeometry (0, radius, height, 4, 1)
var material = new THREE.MeshBasicMaterial( { color: "#00ff00", side: THREE.DoubleSide } );
var pyramid = new THREE.Mesh(geometry, material);

//pyramid.rotateY(Math.PI/4)
console.log("aa",pyramid.geometry.faces)
pyramid.geometry.faces[0].color.setHex(0x00ff00)
pyramid.geometry.faces[1].color.setHex(0x00ffff)
pyramid.geometry.faces[2].color.setHex(0x00ff00)
pyramid.geometry.faces[3].color.setHex(0x00ff00)
pyramid.geometry.faces[4].color.setHex(0x00ff00)
pyramid.geometry.faces[5].color.setHex(0x00ffff)
// pyramid.geometry.faces[6].color.setHex(0x00ff00)
// pyramid.geometry.faces[7].color.setHex(0x00ff00)


pyramid.geometry.colorsNeedUpdate = true;
pyramid.castShadow=true
//pyramid.rotateY(Math.PI/4)
scene.add(pyramid);
// scene.add(pyramid1)
// pyramid1.position.x+=10
// pyramid1.geometry.vertices[2]=10
// var p=pyramid.clone()
// p.position.x+=20
// p.geometry.vertices[2]=10
// scene.add(p)

console.log("pyramid",pyramid)
var triangles=[]
triangles.push(pyramid.geometry.vertices)
var geo = new THREE.BoxGeometry( 8,8,8 );
var mat = new THREE.MeshBasicMaterial( { color:"#00ff00",vertexColors: THREE.FaceColors} );

var color
var c=1
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var tri=[]
for(var i=0;i<5000;i++){
    
    color=getRandomColor()
    var t=triangles[0]
    triangles.shift()
    
    var geo1 = new THREE.CylinderGeometry (0, radius, height, 4, 1)
    var mat1 = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var pyr1 = new THREE.Mesh(geo1, mat1);

    var geo2 = new THREE.CylinderGeometry (0, radius, height, 4, 1)
    var mat2 = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var pyr2 = new THREE.Mesh(geo2, mat2);

    var geo3 = new THREE.CylinderGeometry (0, radius, height, 4, 1)
    var mat3 = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var pyr3 = new THREE.Mesh(geo3, mat3);

    var geo4 = new THREE.CylinderGeometry (0, radius, height, 4, 1)
    var mat4 = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var pyr4 = new THREE.Mesh(geo4, mat4);

    var geo5 = new THREE.CylinderGeometry (0, radius, height, 4, 1)
    var mat5 = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var pyr5= new THREE.Mesh(geo5, mat5);

    var m1={
        x:(t[0].x+t[1].x)/2,
        y:(t[0].y+t[1].y)/2,
        z:(t[0].z+t[1].z)/2
    }
    var m2={
        x:(t[0].x+t[2].x)/2,
        y:(t[0].y+t[2].y)/2,
        z:(t[0].z+t[2].z)/2
    }
    var m3={
        x:(t[0].x+t[3].x)/2,
        y:(t[0].y+t[3].y)/2,
        z:(t[0].z+t[3].z)/2
    }
    var m4={
        x:(t[0].x+t[4].x)/2,
        y:(t[0].y+t[4].y)/2,
        z:(t[0].z+t[4].z)/2
    }
    var m5={
        x:(t[0].x+t[5].x)/2,
        y:(t[0].y+t[5].y)/2,
        z:(t[0].z+t[5].z)/2
    }
    var n1={
        x:(t[2].x+t[1].x)/2,
        y:(t[2].y+t[1].y)/2,
        z:(t[2].z+t[1].z)/2
    }
    var n3={
        x:(t[2].x+t[3].x)/2,
        y:(t[2].y+t[3].y)/2,
        z:(t[2].z+t[3].z)/2
    }
    var n4={
        x:(t[2].x+t[4].x)/2,
        y:(t[2].y+t[4].y)/2,
        z:(t[2].z+t[4].z)/2
    }
    var n5={
        x:(t[2].x+t[5].x)/2,
        y:(t[2].y+t[5].y)/2,
        z:(t[2].z+t[5].z)/2
    }
    var o1={
        x:(t[4].x+t[1].x)/2,
        y:(t[4].y+t[1].y)/2,
        z:(t[4].z+t[1].z)/2
    }
    var o2={
        x:(t[4].x+t[2].x)/2,
        y:(t[4].y+t[2].y)/2,
        z:(t[4].z+t[2].z)/2
    }
    var o3={
        x:(t[4].x+t[3].x)/2,
        y:(t[4].y+t[3].y)/2,
        z:(t[4].z+t[3].z)/2
    }
    var o5={
        x:(t[4].x+t[5].x)/2,
        y:(t[4].y+t[5].y)/2,
        z:(t[4].z+t[5].z)/2
    }
    var p3={
        x:(t[1].x+t[3].x)/2,
        y:(t[1].y+t[3].y)/2,
        z:(t[1].z+t[3].z)/2
    }
    var p5={
        x:(t[1].x+t[5].x)/2,
        y:(t[1].y+t[5].y)/2,
        z:(t[1].z+t[5].z)/2
    }
    var q5={
        x:(t[3].x+t[5].x)/2,
        y:(t[3].y+t[5].y)/2,
        z:(t[3].z+t[5].z)/2
    }
    
    pyr1.geometry.vertices[0]=t[0]
    pyr1.geometry.vertices[1]=m1
    pyr1.geometry.vertices[2]=m2
    pyr1.geometry.vertices[3]=m3
    pyr1.geometry.vertices[4]=m4
    pyr1.geometry.vertices[5]=m5

    pyr2.geometry.vertices[0]=m2
    pyr2.geometry.vertices[1]=n1
    pyr2.geometry.vertices[2]=t[2]
    pyr2.geometry.vertices[3]=n3
    pyr2.geometry.vertices[4]=n4
    pyr2.geometry.vertices[5]=n5

    pyr3.geometry.vertices[0]=m4
    pyr3.geometry.vertices[1]=o1
    pyr3.geometry.vertices[2]=o2
    pyr3.geometry.vertices[3]=o3
    pyr3.geometry.vertices[4]=t[4]
    pyr3.geometry.vertices[5]=o5

    pyr4.geometry.vertices[0]=m1
    pyr4.geometry.vertices[1]=t[1]
    pyr4.geometry.vertices[2]=n1
    pyr4.geometry.vertices[3]=p3
    pyr4.geometry.vertices[4]=o1
    pyr4.geometry.vertices[5]=p5

    pyr5.geometry.vertices[0]=m3
    pyr5.geometry.vertices[1]=p3
    pyr5.geometry.vertices[2]=n3
    pyr5.geometry.vertices[3]=t[3]
    pyr5.geometry.vertices[4]=o3
    pyr5.geometry.vertices[5]=q5

    tri.push(pyr2,pyr3,pyr4,pyr5)
    triangles.push(pyr1.geometry.vertices,pyr2.geometry.vertices,pyr3.geometry.vertices,pyr4.geometry.vertices,pyr5.geometry.vertices)
    scene.add(pyr1,pyr2,pyr3,pyr4,pyr5)
}



var render = function () {

    requestAnimationFrame( render );

    //tri[0].rotation.x+=0.01
    //camera.rotation.y+=0.01
    // for(var i=0;i<tri.length;i++){
    //     console.log("i",i)
    //     console.log("tri[i].geometry.boundingSphere.center",tri[i])
    //     // /ri[i].rotation.z+=0.1
    // }
    //pyr1.rotation.x += 0.001;
   // pyramid.rotation.x += 0.01;
    renderer.render(scene, camera);
};

render();