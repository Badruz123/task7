let dataBlog = [];
function addBlog(event) {
  event.preventDefault();

  let name = document.getElementById("input-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let deskripsi = document.getElementById("input-deskripsi").value;
  let image = document.getElementById("input-blog-image").files;

  if (image.length == 0) {
    return alert("gambar kosong");
  } else {
    image = URL.createObjectURL(image[0]);
  }

  console.log(image);

  let nodeJS = document.getElementById("node-js").checked;
  let reactJs = document.getElementById("react-js").checked;
  let golang = document.getElementById("golang").checked;
  let typeJS = document.getElementById("type-Script").checked;

  if (nodeJS) {
    nodeJS = "fa-brands fa-node-js";
  } else {
    nodeJS = "";
  }
  if (reactJs) {
    reactJs = "fa-brands fa-react ";
  } else {
    reactJs = "";
  }
  if (golang) {
    golang = "fa-brands fa-golang ";
  } else {
    golang = "";
  }
  if (typeJS) {
    typeJS = "fa-brands fa-js ";
  } else {
    typeJS = "";
  }

  console.log(reactJs)
  console.log(nodeJS)
  console.log(golang)
  console.log(typeJS)

  let blog = {
    name,
    startDate,
    endDate,
    deskripsi,
    image,
    nodeJS,
    typeJS,
    reactJs,
    golang,
    postAt: new Date(),
  };
  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}
function renderBlog() {
  document.getElementById("contents").innerHTML = ``;

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += ` 
    <div  id="card-item"class="card-item">
        <div>
            <img style="height: auto; width:100%" src="${
              dataBlog[index].image
            }" style="width: 350px;height: 350px; border-radius: 10px; display: flex; align-items: right"/>
            <h3 class="title">
            <a href="blog-detail.html" target="_blank" style="margin: botton 30px; text-decoration:none ">${
              dataBlog[index].name
            } - ${getFullTime(dataBlog[index].postAt)}
            </a>
            </h3>
            <span> durasi : ${getDistanceTime(
              dataBlog[index].startDate,
              dataBlog[index].endDate
            )} </span>      
            <p style="font-size: 20px ;color: black; text-align: justify;">${
              dataBlog[index].deskripsi
            }</p> 
      <div class="icon">
        <i class="${dataBlog[index].nodeJS}"></i>
        <i class="${dataBlog[index].reactJs}"></i>
        <i class="${dataBlog[index].typeJS}"></i>   
        <i class="${dataBlog[index].golang}"></i> 
      </div>
<div class="btn-blog">
    <button onclick="" class="btn-edit">Edit</button>
    <button onclick="" class="btn-delete">Delete</button>
</div>
        
     </div>
    </div>
    `;
  }
}

function getFullTime(time) {
  // 2022
  let year = time.getFullYear()
  console.log(year);

  return ` ${year}`;
}

function getDistanceTime(startDate, endDate) {
  let timeEnd = new Date(endDate);
  let timeStart = new Date(startDate);

  let distance = timeEnd - timeStart; //milisecond
  console.log(distance);

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam = 3600 detik
  let hoursInDay = 24; // 1 hari = 24 jam
  let dayInMonth = 30; // 1 bulan = 30 hari
  let monthInYear = 12; //1 tahun = 12 bulan

  let distanceYear = Math.floor(
    distance /
      (milisecond * secondInHours * hoursInDay * dayInMonth * monthInYear)
  );

  let distanceMonth = Math.floor(distance / (milisecond * 60 * 60 * 24 * 30));
  let distanceDay = Math.floor(distance / (milisecond * 60 * 60 * 24));
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceYear > 0) {
    return `${distanceYear} year (s) ago`;
  } else if (distanceMonth > 0) {
    return `${distanceMonth} Month (s) ago`;
  } else if (distanceDay > 0) {
    return `${distanceDay} day(s) ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour(s) ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute(s) ago`;
  } else {
    return `${distanceSecond} second(s) ago`;
  }
}

// 1#
// setInterval(function() {
//     renderBlog()
// }, 3000)
