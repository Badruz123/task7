function ShowData(){
    let showName = document.getElementById('input-name').value;
    let showEmail = document.getElementById('input-email').value;
    let showPhone = document.getElementById('input-nohp').value;
    let showSubject = document.getElementById('input-subject').value;
    let showMessage = document.getElementById('input-messege').value;

    console.log(showName);
    console.log(showEmail);
    console.log(showPhone);

    if (showName == ''){
        return alert('nama harus di isi')
    } else if (showEmail == ''){
        return alert('email Harus di isi dong')
    } else if (showPhone == '') {
        return alert('moon maap no telpon di isi dulu')
    } else if (showSubject == ''){
        return alert('subject belum di isi')
    }

    let emailReciever = 'yuhmangkat@gmail.com'

    let a = document.createElement('a');
    a.href = `mailto:${emailReciever}?subject:${showSubject}&body= Assalamualaikum, perkenalkan nama saya ${showName},${showMessage}`
    a.click()
}
