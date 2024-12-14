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
        var parentDiv = document.getElementById("procatt");
        for ( var i in photos) {
            console.log(photos);

             var div1 = document.createElement("div1");
             div1.className=" flex flex-col w-full text-center rounded-lg md:w-1/3 bg-[#1a1c1e]"

            var img = document.createElement("img");
            img.className = "rounded-t-lg pt-1";
            img.setAttribute("src", photos[i].image);

            div1.appendChild(img);
        
            parentDiv.appendChild(div1);


            var h5 = document.createElement("h5");
            h5.className = "pt-6 mb-2 text-2xl font-bold";
            h5.innerHTML = photos[i].Name;
            div1.appendChild(h5);

            var div3 = document.createElement("div3");
            div3.className = "flex justify-center gap-1 text-gray-300 text-lg";
            div1.appendChild(div3);

            var p1 = document.createElement("p1");
            p1.innerHTML=photos[i].Price;
            div3.appendChild(p1);

            var p2 = document.createElement("p2");
            p2.innerHTML="تومان";
            div3.appendChild(p2);

            var div4 = document.createElement("div4");
            div4.className = "px-6 pt-8 mb-8"
            div1.appendChild(div4);

            var a = document.createElement("a");
            a.className = "py-3 px-4 text-white bg-[#343434] text-lg rounded-lg"
            a.innerHTML=" افزودن به سبد خرید"
           a.href="#"
           div4.appendChild(a);

           

        }
    }
}

xhr.send();



