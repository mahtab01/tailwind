//   const tabTitles = document.querySelectorAll('.tab-title');
//   const tabPanels = document.querySelectorAll('.tab-panel');

//   tabTitles.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//       // Remove active state from all tabs and hide all tab panels
//       tabTitles.forEach((tab) => tab.classList.remove('active-tab'));
//       tabPanels.forEach((panel) => panel.classList.add('hidden'));

//       // Add active state to clicked tab and show the corresponding tab panel
//       tab.classList.add('active-tab');
//       tabPanels[index].classList.remove('hidden');
//     });
//   });

console.log('mahtab');
var xhr = new XMLHttpRequest();
xhr.open("GET", "./products.json", true);

xhr.onload = function () {
    if (xhr.status == 200) {
        let photos = JSON.parse(this.responseText);
        console.log(photos);
        for ( var i in photos) {
            console.log(photos);
            
             document.getElementById("procatt")

            var img = document.createElement("img");
            img.className = "rounded-t-lg pt-1";
            img.setAttribute("src", photos[i].image);

            

            document.getElementById("procatt").append(img);

           

        }
    }
}

xhr.send();



