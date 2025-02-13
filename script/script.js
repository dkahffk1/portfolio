document.addEventListener("DOMContentLoaded", function() { 
    const container = document.getElementById("container");
    const firstSection = document.getElementById("게시판1");

    for (let i = 10; i >= 1; i--) {
        const section = document.createElement("section");
        section.classList.add("main_container");

        section.innerHTML = `
            <div class="number_c">${i}</div>
            <div class="title_c">title</div>
            <div class="people_c">name</div>
            <div class="day_c">02-06</div>
            <div class="click_try_c">none</div>
            <div class="good_c">none</div>
        `;

        firstSection.insertAdjacentElement("afterend", section);
    }
});
document.addEventListener("DOMContentLoaded", function() { 
    const container = document.getElementById("container");
    const firstSection = document.getElementById("게시판2");

    for (let i = 5; i >= 1; i--) {
        const section = document.createElement("section");
        section.classList.add("main_container");

        section.innerHTML = `
            <div class="number_c">${i}</div>
            <div class="title_c">title</div>
            <div class="people_c">name</div>
            <div class="day_c">02-06</div>
            <div class="click_try_c">none</div>
            <div class="good_c">none</div>
        `;

        firstSection.insertAdjacentElement("afterend", section);
    }
});
document.addEventListener("DOMContentLoaded", function() { 
    const container = document.getElementById("container");
    const firstSection = document.getElementById("게시판3");

    for (let i = 5; i >= 1; i--) {
        const section = document.createElement("section");
        section.classList.add("main_container");

        section.innerHTML = `
            <div class="number_c">${i}</div>
            <div class="title_c">title</div>
            <div class="people_c">name</div>
            <div class="day_c">02-06</div>
            <div class="click_try_c">none</div>
            <div class="good_c">none</div>
        `;

        firstSection.insertAdjacentElement("afterend", section);
    }
});