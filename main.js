function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TdFAICsSx/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error, results){
    if (error){
        console.error;
    }else{
        console.log(results);
        rn_r = Math.floor(Math.random()* 255) + 1;
        rn_g = Math.floor(Math.random()* 255) + 1;
        rn_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label
        document.getElementById("result_conf").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color = "rgb("+rn_r+" , "+rn_g+" , "+rn_b+")";
        document.getElementById("result_conf").style.color = "rgb("+rn_r+" , "+rn_g+" , "+rn_b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (results[0].label == "clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }else if (results[0].label == "Snap") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }

    }
}
