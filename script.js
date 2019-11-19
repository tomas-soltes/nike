let randomNumber = Math.floor(Math.random() * (2200 - 1500 + 1)) + 1500;
setTimeout(init, randomNumber)

/********  Hide menu on mobile version  *********/
if (window.matchMedia("(max-width: 700px)").matches) {
    document.querySelector('.container').classList.remove('open');
}

/********  MENU  *********/
let container = document.querySelector(".container");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    container.classList.toggle("open");
}

/********  Height check  *********/
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});



/********  Init *********/

function init() {
    let previous = 1;
    let actualItem = 1;
    let timelineItem = document.querySelectorAll(".timeline__item");

    document.querySelector(".loading-screen").classList.add("loading-display-none");
    synchSnapToScroll();
    fetchShoeData();
    animateShoes();
    createScrollDivs();
    timelineEventListeners();
    setTimelineDistances();

    function setTimelineDistances() {
        for (i = 1; i < timelineItem.length - 1; i++) {
            let timelineItemYearNext = timelineItem[i + 1].firstElementChild.nextElementSibling.innerHTML;
            let timelineItemYear = timelineItem[i].firstElementChild.nextElementSibling.innerHTML;
            let timelineDelta = timelineItemYearNext - timelineItemYear;
            timelineItem[i].style.margin = (timelineDelta * 5 + 25) + "% 0";
            console.log(timelineDelta * 30);
            console.log(timelineItemYearNext);
        }
    }

    function synchSnapToScroll() {
        document.querySelector(".scroll-container-wrapper").addEventListener("scroll", function () {
            var div1 = document.querySelector(".scroll-container-wrapper");
            window.scrollTo(0, div1.scrollTop);

        });
    }

    function fetchShoeData() {
        fetch("shoe-data.json")
            .then(res => res.json())
            .then(shoeData => displayShoeData(shoeData))
    }


    function createScrollDivs() {
        for (i = 0; i < 15; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("scroll_container");
            document.querySelector(".scroll-container-wrapper").appendChild(newDiv);
        }
    }

    function displayShoeData(shoeData) {
        let shoeFrameArr = [];
        shoeFrameArr = createShoeFrameArray();
        initialShoe(shoeData);
        let oldi = 1;

        document.querySelector(".scroll-container-wrapper").addEventListener("scroll", function () {
            let scrollPosition = getScrollPosition();
            displayDataOnFrame(shoeFrameArr, scrollPosition, shoeData);
            /*   synchScroll(scrollPosition); */

        });

        function synchScroll(scrollPosition) {
            let menuScrollPosition;
            menuScrollPosition = Math.floor(scrollPosition / 10);
            document.querySelector('.timeline__scroll').scrollTop = menuScrollPosition;

        }

        function initialShoe(shoeData) {
            document.querySelector(".main").style.backgroundColor = shoeData.NikeAirMax[0].backgroundColor;
            document.querySelector(".shoe-name").innerHTML = shoeData.NikeAirMax[0].name;
            document.querySelector(".shoe-year").innerHTML = shoeData.NikeAirMax[0].year;
            document.querySelector(".shoe-description").innerHTML = shoeData.NikeAirMax[0].about;
            document.querySelector(".shoe-colorway").innerHTML = `<b>Original colorway:</b> ${shoeData.NikeAirMax[0].colorway}`;
            let circles = document.querySelectorAll(".colorway-cirlce");
            document.querySelector(".shoe-name").style.color = "black";
            for (j = 0; j < 3; j++) {
                circles[j].style.backgroundColor = shoeData.NikeAirMax[0].colors[j + 1];
            }
        }

        function displayDataOnFrame(shoeFrameArr, scrollPosition, shoeData) {

            for (i = 0; i < 15; i++) {

                if ((scrollPosition >= shoeFrameArr[i].first) && (scrollPosition <= shoeFrameArr[i].last) && oldi !== i) {

                    oldi = i;
                    console.log(oldi);
                    updateTimeline(oldi);
                    document.querySelector(".shoe-name").style.transition = "0s";
                    document.querySelector(".shoe-name").style.opacity = "0";
                    setTimeout(function () {

                        document.querySelector(".shoe-name").style.transition = "0.4s";
                        document.querySelector(".shoe-name").style.opacity = "1";

                    }, 200)

                    document.querySelector(".shoe-name").textContent = shoeData.NikeAirMax[i].name;
                    document.querySelector(".shoe-year").innerHTML = shoeData.NikeAirMax[i].year;
                    document.querySelector(".shoe-description").innerHTML = shoeData.NikeAirMax[i].about;
                    document.querySelector(".shoe-colorway").innerHTML = `<b>Original colorway:</b> ${shoeData.NikeAirMax[i].colorway}`;
                    document.querySelector(".main").style.backgroundColor = shoeData.NikeAirMax[i].backgroundColor;
                    let circles = document.querySelectorAll(".colorway-cirlce");
                    document.querySelector(".shoe-name").style.color = "black";
                    for (j = 0; j < 3; j++) {
                        circles[j].style.backgroundColor = shoeData.NikeAirMax[i].colors[j + 1];
                    }
                    return;
                }
            }



        }


        /* function displayDataOnFrame(shoeFrameArr, scrollPosition, shoeData) {
            for (i = 0; i < 15; i++) {


                if ((scrollPosition >= shoeFrameArr[i].first) && (scrollPosition <= shoeFrameArr[i].last) && oldi !== i) {
                    oldi = i;
                    console.log(oldi);
                    let id = i;
                    updateTimeline(id);
                    document.querySelector(".shoe-name").innerHTML = shoeData.NikeAirMax[i].name;
                    document.querySelector(".shoe-year").innerHTML = shoeData.NikeAirMax[i].year;
                    document.querySelector(".shoe-description").innerHTML = shoeData.NikeAirMax[i].about;
                    document.querySelector(".shoe-colorway").innerHTML = `<b>Original colorway:</b> ${shoeData.NikeAirMax[i].colorway}`;
                    document.querySelector(".main").style.backgroundColor = shoeData.NikeAirMax[i].backgroundColor;
                    let circles = document.querySelectorAll(".colorway-cirlce");
                    document.querySelector(".shoe-name").style.color = "black";
                    for (j = 0; j < 3; j++) {
                        circles[j].style.backgroundColor = shoeData.NikeAirMax[i].colors[j + 1];
                    }
                    return;
                }

            }

        } */

        function updateTimeline(i) {
            console.log("done");

            /*             let itemScrollPosition,itemHeight,timelineHeight;
                        timelineHeight = document.getElementById('timeline__items').offsetHeight;
                        timelineHeight = timelineHeight-200;
                        console.log(timelineHeight);
                        itemHeight = Math.floor(timelineHeight / 14);
                        itemScrollPosition = i*itemHeight;
                        console.log(itemScrollPosition);
                        document.querySelector('.timeline__scroll').scrollTop = itemScrollPosition; */
            setTimeout(function () {
                document.getElementById("t_" + i).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            }, 700)
            document.getElementById("t_" + previous).classList.remove('active');
            document.getElementById("t_" + i).classList.add('active');
            previous = i;
            actualItem = i;
        }

        function createShoeFrameArray() {
            let oneShoeHight = window.innerHeight;
            let j = 1;
            for (i = 0; i < 15; i++) {
                let firstFrame = oneShoeHight * i;
                let lastFrame = oneShoeHight * j;
                let shoeFrame = {}
                shoeFrame["first"] = firstFrame;
                shoeFrame["last"] = lastFrame;
                shoeFrameArr.push(shoeFrame);
                j++;
            }
            return shoeFrameArr;
        }

    }

    function animateShoes() {
        let winHeight = window.innerHeight;
        let animDuration = winHeight * 15;
        let animData = {
            container: document.getElementById('container'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'data.json'
        };
        let anim = bodymovin.loadAnimation(animData);
        window.addEventListener("scroll", function () {
            animatebodymovin(animDuration, anim);
        });


        function animatebodymovin(duration, animObject) {
            scrollPosition = getScrollPosition();
            let maxFrames = animObject.totalFrames;
            let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
            animObject.goToAndStop(frame, true);
        }
    }

    function timelineEventListeners() {
        document.querySelector(".arrow__up").addEventListener("click", moveTimelineUp);
        document.querySelector(".arrow__down").addEventListener("click", moveTimelineDown);
        let buttonsYears = document.querySelectorAll(".timeline__item__mask");
        buttonsYears.forEach(button => {
            button.addEventListener("click", e => {
                let shoeNr = e.target.getAttribute("data-screen");
                let yOffset = (window.innerHeight * shoeNr) + (window.innerHeight / 2);
                document.querySelector(".scroll-container-wrapper").scrollTo(0, yOffset);
            });
        })
    }

    function moveTimelineUp() {
        if (actualItem > 2) {
            document.getElementById("t_" + (actualItem - 2)).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
            actualItem = actualItem - 2;
        }
    }

    function moveTimelineDown() {
        if (actualItem < (timelineItem.length - 2)) {
            document.getElementById("t_" + (actualItem + 2)).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            });
            actualItem = actualItem + 2;
        }
    }



}

function getScrollPosition() {
    let supportPageOffset = window.pageXOffset !== undefined;
    let scrollPosition = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return scrollPosition;
}