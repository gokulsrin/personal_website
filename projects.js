AOS.init({
    duration: 1200,
  })

function toggleAll(){
    /* put simply, I need to make all other elements not visible while making the all visible */

    /* set the display setting of the other (python and java) to none */
    document.getElementById("pythonProjects").style.display = 'none';
    document.getElementById("javaProjects").style.display = 'none';

    /* flip the display setting*/
    document.getElementById("allProjects").style.display = 'block';
}

function toggleJava(){

    document.getElementById("pythonProjects").style.display = 'none';
    document.getElementById("allProjects").style.display = 'none';

    document.getElementById("javaProjects").style.display = 'block';
}

function togglePython(){

    document.getElementById("javaProjects").style.display = 'none';
    document.getElementById("allProjects").style.display = 'none';

    document.getElementById("pythonProjects").style.display = 'block';
}