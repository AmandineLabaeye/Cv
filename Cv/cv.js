function boutonun () {
    var x = document.getElementById('experiencepro');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('boutonunun').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('boutonunun').innerHTML='+';
    }
}

function boutondeux () {
    var x = document.getElementById('diplomeformation');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('boutondeuxdeux').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('boutondeuxdeux').innerHTML='+';
    }
}

function boutontrois () {
    var x = document.getElementById('competences');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('boutontroistrois').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('boutontroistrois').innerHTML='+';
    }
}
