function onLoad(){
    initScene();
    function initScene() {
        var container = document.getElementById("container");
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);        
        renderer.setClearColor(0xffffff); // Set the background to white
        container.appendChild( renderer.domElement );
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(160, window.innerWidth/window.innerHeight, 1, 100); 
        camera.position.z = 100;
        scene.add( camera );
        controls = new THREE.TrackballControls( camera, renderer.domElement ); // Trackball is used for the mouse movements.
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.2;
        
        controls.noZoom = false;
        controls.noPan = false;
        
        controls.staticMoving = false;
        controls.dynamicDampingFactor = 0.3;
        
        controls.minDistance = 1.1;
        controls.maxDistance = 100;
        
        controls.keys = [ 16, 17, 18 ]; // [ rotateKey, zoomKey, panKey ]
        var dirLight = new THREE.DirectionalLight(0xff0000, 0.95);
        dirLight.position.set(-3, 3, 7);
        dirLight.position.normalize();
        scene.add(dirLight);
        
        var pointLight = new THREE.PointLight(0xFFFFFF); //Light effects., else it would appear kinda black
        pointLight.position.set(10, 20, -10);
        scene.add(pointLight);
        var jsonLoader = new THREE.JSONLoader();
        jsonLoader.load( "data/cathedral.json", function( geometry ) { 
            var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0x010057, wireframe: true } ); // This is the colour of theoutline of the heart
            var hemostat = new THREE.Mesh( geometry, outlineMaterial1);
            hemostat.scale.x=100;
            hemostat.scale.y=100;
            hemostat.scale.z=100;
            //hemostat.rotateX(240.4);
            hemostat.rotateX(350);
            hemostat.rotateY(350);
            hemostat.rotateZ(350);
            scene.add(hemostat);
        } );
    }
    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load( "data/cathedral.json", function( geometry ) { 
        var outlineMaterial2 = new THREE.MeshBasicMaterial( { color: 0xD5C4A1}); // This is the colour of the heart 0x870029
        var hemostat = new THREE.Mesh( geometry, outlineMaterial2 );
        //hemostat.rotateX(240.4);
        hemostat.scale.x=100;
        hemostat.scale.y=100;
        hemostat.scale.z=100;
        hemostat.rotateX(350);
        hemostat.rotateY(350);
        hemostat.rotateZ(350);
        //hemostat.position.set(10,10,4);
        scene.add(hemostat);
    } );
    
    animate();
    function animate() {
        requestAnimationFrame( animate );
        render();
    }
    function render() {
        controls.update();
        renderer.render( scene, camera );
    }
    }
    
    
    
    