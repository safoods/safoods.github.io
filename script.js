let dis = 0;
let cartItems = 0;

function loadContent() {
    setTimeout(showPage, 500);
    document.getElementById("splash").style.display = "none";
}

function showPage() {
    document.getElementById("main_body").style.display = "block";
    document.getElementById('1').src = "images/1.svg";
    setTimeout(checkTime, 1000);
}

function checkTime() {
    showApp();
    countCart();
    getLocation();
    if (isOpenTime()) {
        let doneBtn = document.getElementById("done");
        doneBtn.disabled = false;
        try {
            doneBtn.classList.remove("disable");
        } catch {
        }
        document.getElementById("timeDialog").style.display = "none";
    } else {
        document.getElementById("timeDialog").style.display = "flex";
        let doneBtn = document.getElementById("done");
        doneBtn.disabled = true;
        doneBtn.classList.add("disable");
    }
}

function closeTimeDialog() {
    document.getElementById("timeDialog").style.display = "none";
}

function getDistance(lat1, lon1, lat2, lon2) {
    let R = 6371;
    let dLat = deg2rad(lat2 - lat1);
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function search() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchOptions");
    li = ul.getElementsByClassName("options_body");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("options_name")[0];
        txtValue = a.textContent
            || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function changeSearch(_this) {
    document.getElementById("search").value = _this.textContent;
    document.getElementById("searchOptions").style.display = "none";
}

function searchOut() {
    setTimeout(hideSearch, 500);
}

function hideSearch() {
    document.getElementById('searchOptions').style.display = 'none';
}

function updateCartSpinner(which) {
    document.getElementById("cartDialog").style.display = "flex";

    let condName = "cond" + which;
    let quanName = "quan" + which;
    setCookie(condName, (document.getElementById(condName).selectedIndex + 1));
    setCookie(quanName, (document.getElementById(quanName).selectedIndex + 1));
    if (getCookie(("name" + which)).includes("Deal #")) {
        let drinkName = "drink" + which;
        setCookie(drinkName, (document.getElementById(drinkName).selectedIndex + 1));
    }
    document.getElementById(getCookie(("button") + which)).innerText = "Added (" + getCookie(quanName) + ")";

    updateCart(which);
}

function deleteCartItem(which) {
    let typeC = "type" + which;
    delCookie(typeC);
    let ftypeC = "ftype" + which;
    delCookie(ftypeC);
    let imgC = "img" + which;
    delCookie(imgC);
    let nameC = "name" + which;
    delCookie(nameC);
    let roastC = "roast" + which;
    delCookie(roastC);
    let frozenC = "frozen" + which;
    delCookie(frozenC);
    let qtypeC = "qtype" + which;
    delCookie(qtypeC);
    let quanC = "quan" + which;
    delCookie(quanC);
    let condC = "cond" + which;
    delCookie(condC);
    let orderC = "order" + which;
    delCookie(orderC);
    let drinkC = "drink" + which;
    delCookie(drinkC);
    let itemName = "cartItem" + which;
    document.getElementById(itemName).style.display = "none";
    document.getElementById(getCookie(("button") + which)).innerText = "Add To Cart!";
    countCart();
}

function openCart() {
    if (isOpenTime()) {
        let doneBtn = document.getElementById("cartDone");
        doneBtn.disabled = false;
        try {
            doneBtn.classList.remove("disable");
        } catch {
        }
    } else {
        let doneBtn = document.getElementById("cartDone");
        doneBtn.disabled = true;
        doneBtn.classList.add("disable");
    }

    if (locationDenied) {
        alert("You'll need to Allow (Location Access) to Place Your Order!");
        getLocation();
    } else {
        getLocation();
    }
    document.getElementById("cartDialog").style.display = "flex";
    if (getCookie("name1") != null
        && getCookie("name1") !== "") {
        updateCart('1');
        document.getElementById("cartItem1").style.display = "block";
    } else {
        document.getElementById("cartItem1").style.display = "none";
    }
    if (getCookie("name2") != null
        && getCookie("name2") !== "") {
        updateCart('2');
        document.getElementById("cartItem2").style.display = "block";
    } else {
        document.getElementById("cartItem2").style.display = "none";
    }
    if (getCookie("name3") != null
        && getCookie("name3") !== "") {
        updateCart('3');
        document.getElementById("cartItem3").style.display = "block";
    } else {
        document.getElementById("cartItem3").style.display = "none";
    }
    if (getCookie("name4") != null
        && getCookie("name4") !== "") {
        updateCart('4');
        document.getElementById("cartItem4").style.display = "block";
    } else {
        document.getElementById("cartItem4").style.display = "none";
    }
    if (getCookie("name5") != null
        && getCookie("name5") !== "") {
        updateCart('5');
        document.getElementById("cartItem5").style.display = "block";
    } else {
        document.getElementById("cartItem5").style.display = "none";
    }
    if (getCookie("name6") != null
        && getCookie("name6") !== "") {
        updateCart('6');
        document.getElementById("cartItem6").style.display = "block";
    } else {
        document.getElementById("cartItem6").style.display = "none";
    }
    if (getCookie("name7") != null
        && getCookie("name7") !== "") {
        updateCart('7');
        document.getElementById("cartItem7").style.display = "block";
    } else {
        document.getElementById("cartItem7").style.display = "none";
    }
    if (getCookie("name8") != null
        && getCookie("name8") !== "") {
        updateCart('8');
        document.getElementById("cartItem8").style.display = "block";
    } else {
        document.getElementById("cartItem8").style.display = "none";
    }
    if (getCookie("name9") != null
        && getCookie("name9") !== "") {
        updateCart('9');
        document.getElementById("cartItem9").style.display = "block";
    } else {
        document.getElementById("cartItem9").style.display = "none";
    }
    if (getCookie("name10") != null
        && getCookie("name10") !== "") {
        updateCart('10');
        document.getElementById("cartItem10").style.display = "block";
    } else {
        document.getElementById("cartItem10").style.display = "none";
    }
}

function closeCart() {
    document.getElementById("cartDialog").style.display = "none";
}

function getSubTotal() {
    let subTots = 0;
    if (getCookie("name1") != null
        && getCookie("name1") !== "") {
        subTots = subTots + +getCookie("order1");
    }
    if (getCookie("name2") != null
        && getCookie("name2") !== "") {
        subTots = subTots + +getCookie("order2");
    }
    if (getCookie("name3") != null
        && getCookie("name3") !== "") {
        subTots = subTots + +getCookie("order3");
    }
    if (getCookie("name4") != null
        && getCookie("name4") !== "") {
        subTots = subTots + +getCookie("order4");
    }
    if (getCookie("name5") != null
        && getCookie("name5") !== "") {
        subTots = subTots + +getCookie("order5");
    }
    if (getCookie("name6") != null
        && getCookie("name6") !== "") {
        subTots = subTots + +getCookie("order6");
    }
    if (getCookie("name7") != null
        && getCookie("name7") !== "") {
        subTots = subTots + +getCookie("order7");
    }
    if (getCookie("name8") != null
        && getCookie("name8") !== "") {
        subTots = subTots + +getCookie("order8");
    }
    if (getCookie("name9") != null
        && getCookie("name9") !== "") {
        subTots = subTots + +getCookie("order9");
    }
    if (getCookie("name10") != null
        && getCookie("name10") !== "") {
        subTots = subTots + +getCookie("order10");
    }
    return subTots
}

function updateCart(which) {
    let nameName = "name" + which;
    let nameVal = getCookie(nameName);
    let typeName = "type" + which;
    let typeVal = getCookie(typeName);
    let ftypeName = "ftype" + which;
    let ftypeVal = getCookie(ftypeName);
    let qtypeName = "qtype" + which;
    let qtypeVal = getCookie(qtypeName);
    let condName = "cond" + which;
    let condVal = getCookie(condName);
    let quanName = "quan" + which;
    let quanVal = getCookie(quanName);
    let orderName = "order" + which;
    let roastName = "roast" + which;
    let roastVal = getCookie(roastName);
    let frozenName = "frozen" + which;
    let frozenVal = getCookie(frozenName);

    document.getElementById(nameName).textContent = nameVal;

    let x = document.getElementById(condName);

    if (typeVal === "0") {
        let y = document.createElement("option");
        y.text = "Cooked";
        y.value = "1";
        if (x.options[0].text === null
            || x.options[0].text !== "Cooked") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "1") {
        let y = document.createElement("option");
        let z = document.createElement("option");
        y.text = "Roasted";
        z.text = "Frozen";
        y.value = "1";
        z.value = "2";

        if (x.options[0].text === null
            || x.options[0].text !== "Roasted"
            || x.options[1].text === null
            || x.options[1].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.add(z);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "2") {
        let y = document.createElement("option");
        let z = document.createElement("option");
        y.text = "Fried";
        z.text = "Frozen";
        y.value = "1";
        z.value = "2";

        if (x.options[0].text === null
            || x.options[0].text !== "Fried"
            || x.options[1].text === null
            || x.options[1].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.add(z);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "3") {
        let y = document.createElement("option");
        y.text = "Fried";
        y.value = "1";

        if (x.options[0].text === null
            || x.options[0].text !== "Fried") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "4") {
        let y = document.createElement("option");
        y.text = "Frozen";
        y.value = "1";

        if (x.options[0].text === null
            || x.options[0].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "5") {
        let y = document.createElement("option");
        y.text = "Roasted";
        y.value = "1";

        if (x.options[0].text === null
            || x.options[0].text !== "Roasted") {

        } else {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (typeVal === "6") {
        let y = document.createElement("option");
        y.text = "Bag";
        y.value = "1";

        if (x.options[0].text === null
            || x.options[0].text !== "Bag") {

            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    }

    x.selectedIndex = (+condVal - 1);

    let v1 = document.getElementById(quanName);

    if ((+condVal - 1) === 0) {
        if (qtypeVal === "0") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "1 Piece"
                && v1.options[1].text !== null
                && v1.options[1].text === "2 Pieces"
                && v1.options[2].text !== null
                && v1.options[2].text === "3 Pieces"
                && v1.options[3].text !== null
                && v1.options[3].text === "4 Pieces"
                && v1.options[4].text !== null
                && v1.options[4].text === "5 Pieces"
                && v1.options[5].text !== null
                && v1.options[5].text === "6 Pieces"
                && v1.options[6].text !== null
                && v1.options[6].text === "7 Pieces"
                && v1.options[7].text !== null
                && v1.options[7].text === "8 Pieces"
                && v1.options[8].text !== null
                && v1.options[8].text === "9 Pieces"
                && v1.options[9].text !== null
                && v1.options[9].text === "10 Pieces") {
            } else {
                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Piece";
                v1.add(w1);
                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }
        } else if (qtypeVal === "1") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "1 Item"
                && v1.options[1].text !== null
                && v1.options[1].text === "2 Items"
                && v1.options[2].text !== null
                && v1.options[2].text === "3 Items"
                && v1.options[3].text !== null
                && v1.options[3].text === "4 Items"
                && v1.options[4].text !== null
                && v1.options[4].text === "5 Items"
                && v1.options[5].text !== null
                && v1.options[5].text === "6 Items"
                && v1.options[6].text !== null
                && v1.options[6].text === "7 Items"
                && v1.options[7].text !== null
                && v1.options[7].text === "8 Items"
                && v1.options[8].text !== null
                && v1.options[8].text === "9 Items"
                && v1.options[9].text !== null
                && v1.options[9].text === "10 Items") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Item";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Items";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Items";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Items";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Items";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Items";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Items";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Items";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Items";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Items";
                v1.add(w10);
                v1.selectedIndex = 0;
            }

        } else if (qtypeVal === "2") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "1 Box"
                && v1.options[1].text !== null
                && v1.options[1].text === "2 Boxes"
                && v1.options[2].text !== null
                && v1.options[2].text === "3 Boxes"
                && v1.options[3].text !== null
                && v1.options[3].text === "4 Boxes"
                && v1.options[4].text !== null
                && v1.options[4].text === "5 Boxes"
                && v1.options[5].text !== null
                && v1.options[5].text === "6 Boxes"
                && v1.options[6].text !== null
                && v1.options[6].text === "7 Boxes"
                && v1.options[7].text !== null
                && v1.options[7].text === "8 Boxes"
                && v1.options[8].text !== null
                && v1.options[8].text === "9 Boxes"
                && v1.options[9].text !== null
                && v1.options[9].text === "10 Boxes") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Box";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Boxes";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Boxes";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Boxes";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Boxes";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Boxes";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Boxes";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Boxes";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Boxes";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Boxes";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtypeVal === "3") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "4 Pieces"
                && v1.options[1].text !== null
                && v1.options[1].text === "8 Pieces"
                && v1.options[2].text !== null
                && v1.options[2].text === "12 Pieces"
                && v1.options[3].text !== null
                && v1.options[3].text === "16 Pieces"
                && v1.options[4].text !== null
                && v1.options[4].text === "20 Pieces"
                && v1.options[5].text !== null
                && v1.options[5].text === "24 Pieces"
                && v1.options[6].text !== null
                && v1.options[6].text === "28 Pieces"
                && v1.options[7].text !== null
                && v1.options[7].text === "32 Pieces"
                && v1.options[8].text !== null
                && v1.options[8].text === "36 Pieces"
                && v1.options[9].text !== null
                && v1.options[9].text === "40 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "4";
                w1.text = "4 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "8";
                w2.text = "8 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "12";
                w3.text = "12 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "16";
                w4.text = "16 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "20";
                w5.text = "20 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "24";
                w6.text = "24 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "28";
                w7.text = "28 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "32";
                w8.text = "32 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "36";
                w9.text = "36 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "40";
                w10.text = "40 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtypeVal === "4") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "8 Pieces"
                && v1.options[1].text !== null
                && v1.options[1].text === "16 Pieces"
                && v1.options[2].text !== null
                && v1.options[2].text === "24 Pieces"
                && v1.options[3].text !== null
                && v1.options[3].text === "32 Pieces"
                && v1.options[4].text !== null
                && v1.options[4].text === "40 Pieces"
                && v1.options[5].text !== null
                && v1.options[5].text === "48 Pieces"
                && v1.options[6].text !== null
                && v1.options[6].text === "56 Pieces"
                && v1.options[7].text !== null
                && v1.options[7].text === "64 Pieces"
                && v1.options[8].text !== null
                && v1.options[8].text === "72 Pieces"
                && v1.options[9].text !== null
                && v1.options[9].text === "80 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "8";
                w1.text = "8 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "16";
                w2.text = "16 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "24";
                w3.text = "24 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "32";
                w4.text = "32 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "40";
                w5.text = "40 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "48";
                w6.text = "48 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "56";
                w7.text = "56 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "64";
                w8.text = "64 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "72";
                w9.text = "72 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "80";
                w10.text = "80 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtypeVal === "5") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "5 Pieces"
                && v1.options[1].text !== null
                && v1.options[1].text === "10 Pieces"
                && v1.options[2].text !== null
                && v1.options[2].text === "15 Pieces"
                && v1.options[3].text !== null
                && v1.options[3].text === "20 Pieces"
                && v1.options[4].text !== null
                && v1.options[4].text === "25 Pieces"
                && v1.options[5].text !== null
                && v1.options[5].text === "30 Pieces"
                && v1.options[6].text !== null
                && v1.options[6].text === "35 Pieces"
                && v1.options[7].text !== null
                && v1.options[7].text === "40 Pieces"
                && v1.options[8].text !== null
                && v1.options[8].text === "45 Pieces"
                && v1.options[9].text !== null
                && v1.options[9].text === "50 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "5";
                w1.text = "5 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "10";
                w2.text = "10 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "15";
                w3.text = "15 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "20";
                w4.text = "20 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "25";
                w5.text = "25 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "30";
                w6.text = "30 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "35";
                w7.text = "35 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "40";
                w8.text = "40 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "45";
                w9.text = "45 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "50";
                w10.text = "50 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtypeVal === "6") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "6 Pieces"
                && v1.options[1].text !== null
                && v1.options[1].text === "12 Pieces"
                && v1.options[2].text !== null
                && v1.options[2].text === "18 Pieces"
                && v1.options[3].text !== null
                && v1.options[3].text === "24 Pieces"
                && v1.options[4].text !== null
                && v1.options[4].text === "30 Pieces"
                && v1.options[5].text !== null
                && v1.options[5].text === "36 Pieces"
                && v1.options[6].text !== null
                && v1.options[6].text === "42 Pieces"
                && v1.options[7].text !== null
                && v1.options[7].text === "48 Pieces"
                && v1.options[8].text !== null
                && v1.options[8].text === "54 Pieces"
                && v1.options[9].text !== null
                && v1.options[9].text === "60 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "6";
                w1.text = "6 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "12";
                w2.text = "12 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "18";
                w3.text = "18 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "24";
                w4.text = "24 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "30";
                w5.text = "30 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "36";
                w6.text = "36 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "42";
                w7.text = "42 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "48";
                w8.text = "48 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "54";
                w9.text = "54 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "60";
                w10.text = "60 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtypeVal === "7") {
            if (v1.options[0].text !== null
                && v1.options[0].text === "1 Bag"
                && v1.options[1].text !== null
                && v1.options[1].text === "2 Bag"
                && v1.options[2].text !== null
                && v1.options[2].text === "3 Bag"
                && v1.options[3].text !== null
                && v1.options[3].text === "4 Bag"
                && v1.options[4].text !== null
                && v1.options[4].text === "5 Bag"
                && v1.options[5].text !== null
                && v1.options[5].text === "6 Bag"
                && v1.options[6].text !== null
                && v1.options[6].text === "7 Bag"
                && v1.options[7].text !== null
                && v1.options[7].text === "8 Bag"
                && v1.options[8].text !== null
                && v1.options[8].text === "9 Bag"
                && v1.options[9].text !== null
                && v1.options[9].text === "10 Bag") {
            } else {

                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Bag";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Bag";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Bag";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Bag";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Bag";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Bag";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Bag";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Bag";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Bag";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Bag";
                v1.add(w10);
                v1.selectedIndex = 0;

            }
        } else {
            if (ftypeVal === "1") {
                if (v1.options[0].text !== null
                    && v1.options[0].text === "1 KG"
                    && v1.options[1].text !== null
                    && v1.options[1].text === "2 KG"
                    && v1.options[2].text !== null
                    && v1.options[2].text === "3 KG"
                    && v1.options[3].text !== null
                    && v1.options[3].text === "4 KG"
                    && v1.options[4].text !== null
                    && v1.options[4].text === "5 KG"
                    && v1.options[5].text !== null
                    && v1.options[5].text === "6 KG"
                    && v1.options[6].text !== null
                    && v1.options[6].text === "7 KG"
                    && v1.options[7].text !== null
                    && v1.options[7].text === "8 KG"
                    && v1.options[8].text !== null
                    && v1.options[8].text === "9 KG"
                    && v1.options[9].text !== null
                    && v1.options[9].text === "10 KG") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "1";
                    w1.text = "1 KG";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "2";
                    w2.text = "2 KG";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "3";
                    w3.text = "3 KG";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "4";
                    w4.text = "4 KG";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "5";
                    w5.text = "5 KG";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "6";
                    w6.text = "6 KG";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "7";
                    w7.text = "7 KG";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "8";
                    w8.text = "8 KG";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "9";
                    w9.text = "9 KG";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "10";
                    w10.text = "10 KG";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            } else if (ftypeVal === "2") {
                if (v1.options[0].text !== null
                    && v1.options[0].text === "6 Pieces"
                    && v1.options[1].text !== null
                    && v1.options[1].text === "12 Pieces"
                    && v1.options[2].text !== null
                    && v1.options[2].text === "18 Pieces"
                    && v1.options[3].text !== null
                    && v1.options[3].text === "24 Pieces"
                    && v1.options[4].text !== null
                    && v1.options[4].text === "30 Pieces"
                    && v1.options[5].text !== null
                    && v1.options[5].text === "36 Pieces"
                    && v1.options[6].text !== null
                    && v1.options[6].text === "42 Pieces"
                    && v1.options[7].text !== null
                    && v1.options[7].text === "48 Pieces"
                    && v1.options[8].text !== null
                    && v1.options[8].text === "54 Pieces"
                    && v1.options[9].text !== null
                    && v1.options[9].text === "60 Pieces") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "6";
                    w1.text = "6 Pieces";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "12";
                    w2.text = "12 Pieces";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "18";
                    w3.text = "18 Pieces";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "24";
                    w4.text = "24 Pieces";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "30";
                    w5.text = "30 Pieces";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "36";
                    w6.text = "36 Pieces";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "42";
                    w7.text = "42 Pieces";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "48";
                    w8.text = "48 Pieces";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "54";
                    w9.text = "54 Pieces";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "60";
                    w10.text = "60 Pieces";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            } else if (ftypeVal === "3") {
                if (v1.options[0].text !== null
                    && v1.options[0].text === "5 Pieces"
                    && v1.options[1].text !== null
                    && v1.options[1].text === "10 Pieces"
                    && v1.options[2].text !== null
                    && v1.options[2].text === "15 Pieces"
                    && v1.options[3].text !== null
                    && v1.options[3].text === "20 Pieces"
                    && v1.options[4].text !== null
                    && v1.options[4].text === "25 Pieces"
                    && v1.options[5].text !== null
                    && v1.options[5].text === "30 Pieces"
                    && v1.options[6].text !== null
                    && v1.options[6].text === "35 Pieces"
                    && v1.options[7].text !== null
                    && v1.options[7].text === "40 Pieces"
                    && v1.options[8].text !== null
                    && v1.options[8].text === "45 Pieces"
                    && v1.options[9].text !== null
                    && v1.options[9].text === "50 Pieces") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "5";
                    w1.text = "5 Pieces";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "10";
                    w2.text = "10 Pieces";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "15";
                    w3.text = "15 Pieces";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "20";
                    w4.text = "20 Pieces";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "25";
                    w5.text = "25 Pieces";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "30";
                    w6.text = "30 Pieces";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "35";
                    w7.text = "35 Pieces";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "40";
                    w8.text = "40 Pieces";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "45";
                    w9.text = "45 Pieces";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "50";
                    w10.text = "50 Pieces";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            }
        }
    } else {
        if (ftypeVal === "1") {
            if (v1.options[0].text !== null && v1.options[0].text === "1 KG" && v1.options[1].text !== null && v1.options[1].text === "2 KG" && v1.options[2].text !== null && v1.options[2].text === "3 KG" && v1.options[3].text !== null && v1.options[3].text === "4 KG" && v1.options[4].text !== null && v1.options[4].text === "5 KG" && v1.options[5].text !== null && v1.options[5].text === "6 KG" && v1.options[6].text !== null && v1.options[6].text === "7 KG" && v1.options[7].text !== null && v1.options[7].text === "8 KG" && v1.options[8].text !== null && v1.options[8].text === "9 KG" && v1.options[9].text !== null && v1.options[9].text === "10 KG") {
            } else {
                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 KG";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 KG";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 KG";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 KG";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 KG";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 KG";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 KG";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 KG";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 KG";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 KG";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (ftypeVal === "2") {
            if (v1.options[0].text !== null && v1.options[0].text === "6 Pieces" && v1.options[1].text !== null && v1.options[1].text === "12 Pieces" && v1.options[2].text !== null && v1.options[2].text === "18 Pieces" && v1.options[3].text !== null && v1.options[3].text === "24 Pieces" && v1.options[4].text !== null && v1.options[4].text === "30 Pieces" && v1.options[5].text !== null && v1.options[5].text === "36 Pieces" && v1.options[6].text !== null && v1.options[6].text === "42 Pieces" && v1.options[7].text !== null && v1.options[7].text === "48 Pieces" && v1.options[8].text !== null && v1.options[8].text === "54 Pieces" && v1.options[9].text !== null && v1.options[9].text === "60 Pieces") {
            } else {
                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "6";
                w1.text = "6 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "12";
                w2.text = "12 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "18";
                w3.text = "18 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "24";
                w4.text = "24 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "30";
                w5.text = "30 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "36";
                w6.text = "36 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "42";
                w7.text = "42 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "48";
                w8.text = "48 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "54";
                w9.text = "54 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "60";
                w10.text = "60 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (ftypeVal === "3") {
            if (v1.options[0].text !== null && v1.options[0].text === "5 Pieces" && v1.options[1].text !== null && v1.options[1].text === "10 Pieces" && v1.options[2].text !== null && v1.options[2].text === "15 Pieces" && v1.options[3].text !== null && v1.options[3].text === "20 Pieces" && v1.options[4].text !== null && v1.options[4].text === "25 Pieces" && v1.options[5].text !== null && v1.options[5].text === "30 Pieces" && v1.options[6].text !== null && v1.options[6].text === "35 Pieces" && v1.options[7].text !== null && v1.options[7].text === "40 Pieces" && v1.options[8].text !== null && v1.options[8].text === "45 Pieces" && v1.options[9].text !== null && v1.options[9].text === "50 Pieces") {
            } else {
                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "5";
                w1.text = "5 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "10";
                w2.text = "10 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "15";
                w3.text = "15 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "20";
                w4.text = "20 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "25";
                w5.text = "25 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "30";
                w6.text = "30 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "35";
                w7.text = "35 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "40";
                w8.text = "40 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "45";
                w9.text = "45 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "50";
                w10.text = "50 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        }
    }


    v1.selectedIndex = (quanVal - 1);

    if (nameVal.includes("Deal #")) {
        let drinkName = "drink" + which;
        let drinkNameName = "drinkName" + which;
        let drinkSpinner = document.getElementById(drinkName);
        document.getElementById(drinkNameName).style.display = "block";
        drinkSpinner.style.display = "block";
        drinkSpinner.selectedIndex = (getCookie(drinkName) - 1);
    } else {
        let drinkName = "drink" + which;
        let drinkNameName = "drinkName" + which;
        document.getElementById(drinkName).style.display = "none";
        document.getElementById(drinkNameName).style.display = "none";
        document.getElementById(drinkName).selectedIndex = 0;
    }

    let cartOc;
    let order = ((+condVal - 1) === 0) ? roastVal : frozenVal;

    cartOc = order * quanVal;

    document.getElementById(orderName).textContent = "Order : " + cartOc + "/-Rs";
    setCookie(orderName, cartOc);

    document.getElementById("sub_cart_tot").textContent = "Subtotal : " + getSubTotal() + "/-RS";
    if (dis === 0) {
        document.getElementById("cart_del").textContent = "Delivery : (KM × 10/-RS)";
        document.getElementById("cart_tot").textContent = "Total : (Delivery × " + getSubTotal() + "/-RS)";
        delivery = "(KM × 10/-RS)";
        fin = "(Delivery × " + getSubTotal() + "/-RS)";
    } else {
        document.getElementById("cart_del").textContent = "Delivery : " + dis + "/-RS";
        delivery = dis + "/-RS";
        fin = (+getSubTotal() + +dis) + "/-RS";
        document.getElementById("cart_tot").textContent = "Total : " + fin;
    }
}

let img, name, type, roast, frozen, quanv, quan, cond, oc, fin, delivery, long, lat, orderNo, ftype, qtype, waOrder,
    smsOrder;
let locationDenied = false;
let doneMap = true;
let drink = "0";

function getLocation() {
    if (navigator.geolocation) {
        document.getElementById('location_text').textContent = "Getting Your Location...";
        if (document.getElementById("map_load").style.display === "none") {
            document.getElementById("map_load").style.display = "";
            document.getElementById("refresh").style.display = "none";
        }
        document.getElementById("done_map").style.display = "none";

        document.getElementById('cart_location_text').textContent = "Getting Your Location...";
        if (document.getElementById("cart_map_load").style.display === "none") {
            document.getElementById("cart_map_load").style.display = "";
            document.getElementById("cart_refresh").style.display = "none";
        }
        document.getElementById("cart_done_map").style.display = "none";

        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        errorMap();
        lat = undefined;
        long = undefined;
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    if (lat !== undefined
        && lat !== ""
        && lat !== null
        && long !== undefined
        && long !== ""
        && long !== null) {
        document.getElementById('location_text').textContent = "Your Location has been set!";
        if (document.getElementById("map_load").style.display === "") {
            document.getElementById("map_load").style.display = "none";
        }

        document.getElementById('cart_location_text').textContent = "Your Location has been set!";
        if (document.getElementById("cart_map_load").style.display === "") {
            document.getElementById("cart_map_load").style.display = "none";
        }

        dis = Math.floor(15 * getDistance(31.493109, 74.257061, 31.433335, 74.301228));

        if (dis === 0) {
            delivery = "(KM × 10/-RS)";
            document.getElementById("del").textContent = "Delivery : (KM × 10/-RS)";
            fin = "(Delivery × " + oc + "/-RS)";
            document.getElementById("tot").textContent = "Total : (Delivery × " + oc + "/-RS)";
            document.getElementById("cart_del").textContent = "Delivery : (KM × 10/-RS)";
            document.getElementById("cart_tot").textContent = "Total : (Delivery × " + getSubTotal() + "/-RS)";
            let elements = document.querySelectorAll('.del');
            elements.forEach(function (element) {
                element.textContent = "Delivery : (KM × 10/-RS)"
            });
        } else {
            document.getElementById("del").textContent = "Delivery : " + dis + "/-RS";
            delivery = dis + "/-RS";
            fin = (+oc + +dis) + "/-RS";
            document.getElementById("tot").textContent = "Total : " + fin;
            document.getElementById("cart_del").textContent = "Delivery : " + dis + "/-RS";
            document.getElementById("cart_tot").textContent = "Total : " + (dis + getSubTotal()) + "/-RS";
            let delFin = "Delivery : " + dis + "/-RS";

            let elements = document.querySelectorAll('.del');
            elements.forEach(function (element) {
                element.textContent = delFin;
            });
        }

        document.getElementById("done_map").style.display = "";
        document.getElementById("done_map").src = "images/done_map.svg";
        document.getElementById("refresh").style.display = "";

        document.getElementById("cart_done_map").style.display = "";
        document.getElementById("cart_done_map").src = "images/done_map.svg";
        document.getElementById("cart_refresh").style.display = "";

        doneMap = true;
        locationDenied = false;
    } else {
        errorMap();
        locationDenied = true;
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            if (!locationDenied) {
                alert("You'll need to (Allow Location) Access to Place Your Order!");
                getLocation();
                locationDenied = true;
            } else {
                errorMap();
            }
            break;
        case error.POSITION_UNAVAILABLE:
            errorMap();
            locationDenied = false;
            break;
        case error.TIMEOUT:
            locationDenied = false;
            errorMap();
            break;
        case error.UNKNOWN_ERR:
            locationDenied = false;
            errorMap();
            break;
    }
}

function openLocation() {
    if (doneMap) {
        if (lat !== undefined
            && lat !== ""
            && lat !== null
            && long !== undefined
            && long !== ""
            && long !== null) {
            let gm = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + long;
            window.open(gm, "_blank");
        }
    } else {
        if (locationDenied) {
            alert("You'll need to Allow (Location Access) to Place Your Order!");
            getLocation();
        } else {
            getLocation()
        }
    }
}

function errorMap() {
    document.getElementById('location_text').textContent = "Location Not Available!";
    document.getElementById("map_load").style.display = "none";
    document.getElementById("refresh").style.display = "none";
    document.getElementById("done_map").style.display = "";
    document.getElementById("done_map").src = "images/error_map.svg";

    document.getElementById('cart_location_text').textContent = "Location Not Available!";
    document.getElementById("cart_map_load").style.display = "none";
    document.getElementById("cart_refresh").style.display = "none";
    document.getElementById("cart_done_map").style.display = "";
    document.getElementById("cart_done_map").src = "images/error_map.svg";

    doneMap = false;
}

function order(qtype1, ftype1, img1, name1, type1, roast1, frozen1) {
    type = type1;
    ftype = ftype1;
    qtype = qtype1;
    img = img1;
    name = name1;
    roast = roast1;
    frozen = frozen1;
    orderNo = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("orderDialog").style.display = "flex";
    update();
}

function countCart() {
    cartItems = 0;
    if (!isEmptyOrNull(getCookie("name1"))) {
        cartItems = (cartItems + 1);
        document.getElementById(getCookie("button1")).innerText = "Added (" + getCookie("quan1") + ")";
    }
    if (!isEmptyOrNull(getCookie("name2"))) {
        cartItems = (cartItems + 1);
        document.getElementById(getCookie("button2")).innerText = "Added (" + getCookie("quan2") + ")";
    }
    if (!isEmptyOrNull(getCookie("name3"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button3")).innerText = "Added (" + getCookie("quan3") + ")";
    }
    if (!isEmptyOrNull(getCookie("name4"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button4")).innerText = "Added (" + getCookie("quan4") + ")";
    }
    if (!isEmptyOrNull(getCookie("name5"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button5")).innerText = "Added (" + getCookie("quan5") + ")";
    }
    if (!isEmptyOrNull(getCookie("name6"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button6")).innerText = "Added (" + getCookie("quan6") + ")";
    }
    if (!isEmptyOrNull(getCookie("name7"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button7")).innerText = "Added (" + getCookie("quan7") + ")";
    }
    if (!isEmptyOrNull(getCookie("name8"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button8")).innerText = "Added (" + getCookie("quan8") + ")";
    }
    if (!isEmptyOrNull(getCookie("name9"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button9")).innerText = "Added (" + getCookie("quan9") + ")";
    }
    if (!isEmptyOrNull(getCookie("name10"))) {
        cartItems = cartItems + 1;
        document.getElementById(getCookie("button10")).innerText = "Added (" + getCookie("quan10") + ")";
    }

    if (cartItems === 0) {
        document.getElementById("cart_btn").src = "images/cart0.svg";
        document.getElementById("emptyCart").style.display = "block";
        document.getElementById("cartDetails").style.display = "none";
    } else {
        document.getElementById("emptyCart").style.display = "none";
        document.getElementById("cartDetails").style.display = "block";
    }
    if (cartItems === 1) {
        document.getElementById("cart_btn").src = "images/cart1.svg";
    } else if (cartItems === 2) {
        document.getElementById("cart_btn").src = "images/cart2.svg";
    } else if (cartItems === 3) {
        document.getElementById("cart_btn").src = "images/cart3.svg";
    } else if (cartItems === 4) {
        document.getElementById("cart_btn").src = "images/cart4.svg";
    } else if (cartItems === 5) {
        document.getElementById("cart_btn").src = "images/cart5.svg";
    } else if (cartItems === 6) {
        document.getElementById("cart_btn").src = "images/cart6.svg";
    } else if (cartItems === 7) {
        document.getElementById("cart_btn").src = "images/cart7.svg";
    } else if (cartItems === 8) {
        document.getElementById("cart_btn").src = "images/cart8.svg";
    } else if (cartItems === 9) {
        document.getElementById("cart_btn").src = "images/cart9.svg";
    } else if (cartItems === 10) {
        document.getElementById("cart_btn").src = "images/cart10.svg";
    }
    document.getElementById("tot_items").innerText = "Total Cart Items : " + cartItems;
}

function getType(val, con) {
    let cd;
    if (val === "0") {
        cd = "Cooked";
    } else if (val === "1") {
        if (con === 0) {
            cd = "Roasted";
        } else {
            cd = "Frozen";
        }
    } else if (val === "2") {
        if (con === 0) {
            cd = "Fried";
        } else {
            cd = "Frozen";
        }
    } else if (val === "3") {
        cd = "Fried";
    } else if (val === "4") {
        cd = "Frozen";
    } else if (val === "5") {
        cd = "Roasted";
    } else if (val === "6") {
        cd = "Bag";
    }
    return cd
}

function getDrink(val) {
    let finDrink = "";
    if (val === "0") {
        finDrink = ""
    } else if (val === "1") {
        finDrink = "Cold Drink : Random%0A"
    } else if (val === "2") {
        finDrink = "Cold Drink : Coke%0A"
    } else if (val === "3") {
        finDrink = "Cold Drink : Sprite%0A"
    } else if (val === "4") {
        finDrink = "Cold Drink : Fanta%0A"
    }
    return finDrink
}

function sendCart() {
    countCart();
    let order1 = "";
    let order2 = "";
    let order3 = "";
    let order4 = "";
    let order5 = "";
    let order6 = "";
    let order7 = "";
    let order8 = "";
    let order9 = "";
    let order10 = "";

    let cartOrderNo = "Order Number : #" + (Math.floor(100000 + Math.random() * 900000)) + "%0A%0A";

    if (!isEmptyOrNull(getCookie("name1"))) {
        let finDrink;
        if (getCookie("name1").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink1"));
        } else {
            finDrink = "";
        }
        order1 = "Name : " + getCookie("name1") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond1") - 1), getCookie("qtype1"), getCookie("quan1"), getCookie("ftype1")) + "%0A"
            + "Condition : " + getType(getCookie("type1"), (getCookie("cond1") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order1") + "/-RS" + "%0A%0A";

    }
    if (!isEmptyOrNull(getCookie("name2"))) {
        let finDrink;
        if (getCookie("name2").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink2"));
        } else {
            finDrink = "";
        }
        order2 = "Name : " + getCookie("name2") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond2") - 1), getCookie("qtype2"), getCookie("quan2"), getCookie("ftype2")) + "%0A"
            + "Condition : " + getType(getCookie("type2"), (getCookie("cond2") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order2") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name3"))) {
        let finDrink;
        if (getCookie("name3").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink3"));
        } else {
            finDrink = "";
        }
        order3 = "Name : " + getCookie("name3") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond3") - 1), getCookie("qtype3"), getCookie("quan3"), getCookie("ftype3")) + "%0A"
            + "Condition : " + getType(getCookie("type3"), (getCookie("cond3") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order3") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name4"))) {
        let finDrink;
        if (getCookie("name4").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink4"));
        } else {
            finDrink = "";
        }
        order4 = "Name : " + getCookie("name4") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond4") - 1), getCookie("qtype4"), getCookie("quan4"), getCookie("ftype4")) + "%0A"
            + "Condition : " + getType(getCookie("type4"), (getCookie("cond4") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order4") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name5"))) {
        let finDrink;
        if (getCookie("name5").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink5"));
        } else {
            finDrink = "";
        }
        order5 = "Name : " + getCookie("name5") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond5") - 1), getCookie("qtype5"), getCookie("quan5"), getCookie("ftype5")) + "%0A"
            + "Condition : " + getType(getCookie("type5"), (getCookie("cond5") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order5") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name6"))) {
        let finDrink;
        if (getCookie("name6").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink6"));
        } else {
            finDrink = "";
        }
        order6 = "Name : " + getCookie("name6") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond6") - 1), getCookie("qtype6"), getCookie("quan6"), getCookie("ftype6")) + "%0A"
            + "Condition : " + getType(getCookie("type6"), (getCookie("cond6") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order6") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name7"))) {
        let finDrink;
        if (getCookie("name7").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink7"));
        } else {
            finDrink = "";
        }
        order7 = "Name : " + getCookie("name7") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond7") - 1), getCookie("qtype7"), getCookie("quan7"), getCookie("ftype7")) + "%0A"
            + "Condition : " + getType(getCookie("type7"), (getCookie("cond7") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order7") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name8"))) {
        let finDrink;
        if (getCookie("name8").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink8"));
        } else {
            finDrink = "";
        }
        order8 = "Name : " + getCookie("name8") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond8") - 1), getCookie("qtype8"), getCookie("quan8"), getCookie("ftype8")) + "%0A"
            + "Condition : " + getType(getCookie("type8"), (getCookie("cond8") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order8") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name9"))) {
        let finDrink;
        if (getCookie("name9").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink9"));
        } else {
            finDrink = "";
        }
        order9 = "Name : " + getCookie("name9") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond9") - 1), getCookie("qtype9"), getCookie("quan9"), getCookie("ftype9")) + "%0A"
            + "Condition : " + getType(getCookie("type9"), (getCookie("cond9") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order9") + "/-RS" + "%0A%0A";
    }
    if (!isEmptyOrNull(getCookie("name10"))) {
        let finDrink;
        if (getCookie("name10").includes("Deal #")) {
            finDrink = getDrink(getCookie("drink10"));
        } else {
            finDrink = "";
        }
        order10 = "Name : " + getCookie("name10") + "%0A"
            + "Quantity : " + getQuan((getCookie("cond10") - 1), getCookie("qtype10"), getCookie("quan10"), getCookie("ftype10")) + "%0A"
            + "Condition : " + getType(getCookie("type10"), (getCookie("cond10") - 1)) + "%0A"
            + finDrink + "Order : " + getCookie("order10") + "/-RS" + "%0A%0A";
    }

    let locate;
    if (lat !== undefined
        && lat !== ""
        && lat !== null
        && long !== undefined
        && long !== ""
        && long !== null) {
        locate = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + long;
    } else {
        locate = "N%2FA";
    }

    let readyOrder =
        cartOrderNo
        + order1
        + order2
        + order3
        + order4
        + order5
        + order6
        + order7
        + order8
        + order9
        + order10
        + "Total Items : " + cartItems + "%0A"
        + "Subtotal : " + getSubTotal() + "/-RS" + "%0A"
        + "Delivery : " + delivery + "%0A"
        + "Total : " + fin + "%0A"
        + "Location : " + locate + "%0A"
        + "Additional Message : ";
    waOrder = readyOrder
        .replace(/ /g, "%20")
        .replace(/:/g, "%3A")
        .replace(/\//g, "%2F")
        .replace(/;/g, "%3B")
        .replace(/@/g, "%40")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/=/g, "%3D")
        .replace(/&/g, "%26")
        .replace(/\$/g, "%24")
        .replace(/#/g, "%23")
        .replace(/\+/g, "%2B")
        .replace(/,/g, "%2C")
        .replace(/\?/g, "%3F");

    smsOrder = readyOrder
        .replace(/ /g, "%20")
        .replace(/:/g, "%3A")
        .replace(/\//g, "%2F")
        .replace(/;/g, "%3B")
        .replace(/@/g, "%40")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/=/g, "%3D")
        .replace(/&/g, "%2526")
        .replace(/\$/g, "%24")
        .replace(/#/g, "%23")
        .replace(/\+/g, "%2B")
        .replace(/,/g, "%2C")
        .replace(/\?/g, "%3F");

    document.getElementById('sendDialog').style.display = 'flex';
}

function addToCart(_this, qtype1, ftype1, img1, name1, type1, roast1, frozen1,) {
    countCart();
    if (name1 === getCookie("name1")
        || name1 === getCookie("name2")
        || name1 === getCookie("name3")
        || name1 === getCookie("name4")
        || name1 === getCookie("name5")
        || name1 === getCookie("name6")
        || name1 === getCookie("name7")
        || name1 === getCookie("name8")
        || name1 === getCookie("name9")
        || name1 === getCookie("name10")) {
        if (getCookie("name1") === name1) {
            let quaniC = +getCookie("quan1") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name1") + " in your cart!");
            } else {
                setCookie("quan1", quaniC);
                _this.classList.add("gotocart");
                setCookie("button1", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name2") === name1) {
            let quaniC = +getCookie("quan2") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name2") + " in your cart!");
            } else {
                setCookie("quan2", quaniC);
                _this.classList.add("gotocart");
                setCookie("button2", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name3") === name1) {
            let quaniC = +getCookie("quan3") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name3") + " in your cart!");
            } else {
                setCookie("quan3", quaniC);
                _this.classList.add("gotocart");
                setCookie("button3", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name4") === name1) {
            let quaniC = +getCookie("quan4") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name4") + " in your cart!");
            } else {
                setCookie("quan4", quaniC);
                _this.classList.add("gotocart");
                setCookie("button4", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name5") === name1) {
            let quaniC = +getCookie("quan5") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name5") + " in your cart!");
            } else {
                setCookie("quan5", quaniC);
                _this.classList.add("gotocart");
                setCookie("button5", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name6") === name1) {
            let quaniC = +getCookie("quan6") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name6") + " in your cart!");
            } else {
                setCookie("quan6", quaniC);
                _this.classList.add("gotocart");
                setCookie("button6", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name7") === name1) {
            let quaniC = +getCookie("quan7") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name7") + " in your cart!");
            } else {
                setCookie("quan7", quaniC);
                _this.classList.add("gotocart");
                setCookie("button7", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name8") === name1) {
            let quaniC = +getCookie("quan8") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name8") + " in your cart!");
            } else {
                setCookie("quan8", quaniC);
                _this.classList.add("gotocart");
                setCookie("button8", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name9") === name1) {
            let quaniC = +getCookie("quan9") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name9") + " in your cart!");
            } else {
                setCookie("quan9", quaniC);
                _this.classList.add("gotocart");
                setCookie("button9", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
        if (getCookie("name10") === name1) {
            let quaniC = +getCookie("quan10") + 1;
            if (quaniC > 10) {
                alert("You have reached the maximum amount of : " + getCookie("name10") + " in your cart!");
            } else {
                setCookie("quan10", quaniC);
                _this.classList.add("gotocart");
                setCookie("button10", _this.id);
                _this.innerText = "Added (" + quaniC + ")";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
    } else {
        if (cartItems === 10 || cartItems > 10) {
            alert("Your cart is full!");
        } else {
            if (isEmptyOrNull(getCookie("name1"))) {
                let typeC = "type" + "1";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "1";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "1";
                setCookie(imgC, img1);
                let nameC = "name" + "1";
                setCookie(nameC, name1);
                let roastC = "roast" + "1";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "1";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "1";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "1";
                setCookie(quanC, "1");
                let condC = "cond" + "1";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "1";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button1", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name2"))) {
                let typeC = "type" + "2";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "2";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "2";
                setCookie(imgC, img1);
                let nameC = "name" + "2";
                setCookie(nameC, name1);
                let roastC = "roast" + "2";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "2";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "2";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "2";
                setCookie(quanC, "1");
                let condC = "cond" + "2";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "2";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button2", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name3"))) {
                let typeC = "type" + "3";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "3";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "3";
                setCookie(imgC, img1);
                let nameC = "name" + "3";
                setCookie(nameC, name1);
                let roastC = "roast" + "3";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "3";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "3";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "3";
                setCookie(quanC, "1");
                let condC = "cond" + "3";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "3";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button3", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name4"))) {
                let typeC = "type" + "4";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "4";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "4";
                setCookie(imgC, img1);
                let nameC = "name" + "4";
                setCookie(nameC, name1);
                let roastC = "roast" + "4";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "4";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "4";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "4";
                setCookie(quanC, "1");
                let condC = "cond" + "4";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "4";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button4", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name5"))) {
                let typeC = "type" + "5";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "5";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "5";
                setCookie(imgC, img1);
                let nameC = "name" + "5";
                setCookie(nameC, name1);
                let roastC = "roast" + "5";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "5";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "5";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "5";
                setCookie(quanC, "1");
                let condC = "cond" + "5";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "5";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button5", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name6"))) {
                let typeC = "type" + "6";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "6";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "6";
                setCookie(imgC, img1);
                let nameC = "name" + "6";
                setCookie(nameC, name1);
                let roastC = "roast" + "6";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "6";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "6";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "6";
                setCookie(quanC, "1");
                let condC = "cond" + "6";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "6";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button6", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name7"))) {
                let typeC = "type" + "7";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "7";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "7";
                setCookie(imgC, img1);
                let nameC = "name" + "7";
                setCookie(nameC, name1);
                let roastC = "roast" + "7";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "7";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "7";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "7";
                setCookie(quanC, "1");
                let condC = "cond" + "7";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "7";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button7", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name8"))) {
                let typeC = "type" + "8";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "8";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "8";
                setCookie(imgC, img1);
                let nameC = "name" + "8";
                setCookie(nameC, name1);
                let roastC = "roast" + "8";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "8";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "8";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "8";
                setCookie(quanC, "1");
                let condC = "cond" + "8";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "8";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button8", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name9"))) {
                let typeC = "type" + "9";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "9";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "9";
                setCookie(imgC, img1);
                let nameC = "name" + "9";
                setCookie(nameC, name1);
                let roastC = "roast" + "9";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "9";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "9";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "9";
                setCookie(quanC, "1");
                let condC = "cond" + "9";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "9";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button9", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            } else if (isEmptyOrNull(getCookie("name10"))) {
                let typeC = "type" + "10";
                setCookie(typeC, type1);
                let ftypeC = "ftype" + "10";
                setCookie(ftypeC, ftype1);
                let imgC = "img" + "10";
                setCookie(imgC, img1);
                let nameC = "name" + "10";
                setCookie(nameC, name1);
                let roastC = "roast" + "10";
                setCookie(roastC, roast1);
                let frozenC = "frozen" + "10";
                setCookie(frozenC, frozen1);
                let qtypeC = "qtype" + "10";
                setCookie(qtypeC, qtype1);
                let quanC = "quan" + "10";
                setCookie(quanC, "1");
                let condC = "cond" + "10";
                setCookie(condC, "1");
                if (name1.includes("Deal #")) {
                    let drinkC = "drink" + "10";
                    setCookie(drinkC, "1");
                }
                _this.classList.add("gotocart");
                setCookie("button10", _this.id);
                _this.innerText = "Added (1)";
                setTimeout(function () {
                    _this.classList.remove("gotocart");
                }, 250);
            }
        }
    }
    countCart();
}

function closeOrderDialog() {
    document.getElementById("orderDialog").style.display = "none";
}

window.onclick = function (event) {
    if (event.target === document.getElementById("orderDialog")) {
        document.getElementById("orderDialog").style.display = "none";
    }
    if (event.target === document.getElementById("callDialog")) {
        document.getElementById("callDialog").style.display = "none";
    }
    if (event.target === document.getElementById("sendDialog")) {
        document.getElementById("sendDialog").style.display = "none";
    }
    if (event.target === document.getElementById("cartDialog")) {
        document.getElementById("cartDialog").style.display = "none";
    }
};

function getQuan(condi, qtypei, val, ftypei) {
    let quantity = "0";
    if (condi === 0) {
        if (qtypei === "0") {
            if (val === "1") {
                quantity = "1 Piece";
            } else if (val === "2") {
                quantity = "2  Pieces";
            } else if (val === "3") {
                quantity = "3 Pieces";
            } else if (val === "4") {
                quantity = "4 Pieces";
            } else if (val === "5") {
                quantity = "5 Pieces";
            } else if (val === "6") {
                quantity = "6 Pieces";
            } else if (val === "7") {
                quantity = "7 Pieces";
            } else if (val === "8") {
                quantity = "8 Pieces";
            } else if (val === "9") {
                quantity = "9 Pieces";
            } else if (val === "10") {
                quantity = "10 Pieces";
            }
        } else if (qtypei === "1") {
            if (val === "1") {
                quantity = "1 Item";
            } else if (val === "2") {
                quantity = "2 Items";
            } else if (val === "3") {
                quantity = "3 Items";
            } else if (val === "4") {
                quantity = "4 Items";
            } else if (val === "5") {
                quantity = "5 Items";
            } else if (val === "6") {
                quantity = "6 Items";
            } else if (val === "7") {
                quantity = "7 Items";
            } else if (val === "8") {
                quantity = "8 Items";
            } else if (val === "9") {
                quantity = "9 Items";
            } else if (val === "10") {
                quantity = "10 Items";
            }
        } else if (qtypei === "2") {
            if (val === "1") {
                quantity = "1 Box";
            } else if (val === "2") {
                quantity = "2 Boxes";
            } else if (val === "3") {
                quantity = "3 Boxes";
            } else if (val === "4") {
                quantity = "4 Boxes";
            } else if (val === "5") {
                quantity = "5 Boxes";
            } else if (val === "6") {
                quantity = "6 Boxes";
            } else if (val === "7") {
                quantity = "7 Boxes";
            } else if (val === "8") {
                quantity = "8 Boxes";
            } else if (val === "9") {
                quantity = "9 Boxes";
            } else if (val === "10") {
                quantity = "10 Boxes";
            }
        } else if (qtypei === "3") {
            if (val === "1") {
                quantity = "4 Pieces";
            } else if (val === "2") {
                quantity = "8 Pieces";
            } else if (val === "3") {
                quantity = "12 Pieces";
            } else if (val === "4") {
                quantity = "16 Pieces";
            } else if (val === "5") {
                quantity = "20 Pieces";
            } else if (val === "6") {
                quantity = "24 Pieces";
            } else if (val === "7") {
                quantity = "28 Pieces";
            } else if (val === "8") {
                quantity = "32 Pieces";
            } else if (val === "9") {
                quantity = "36 Pieces";
            } else if (val === "10") {
                quantity = "40 Pieces";
            }

        } else if (qtypei === "4") {
            if (val === "1") {
                quantity = "8 Pieces";
            } else if (val === "2") {
                quantity = "16 Pieces";
            } else if (val === "3") {
                quantity = "24 Pieces";
            } else if (val === "4") {
                quantity = "32 Pieces";
            } else if (val === "5") {
                quantity = "40 Pieces";
            } else if (val === "6") {
                quantity = "48 Pieces";
            } else if (val === "7") {
                quantity = "56 Pieces";
            } else if (val === "8") {
                quantity = "64 Pieces";
            } else if (val === "9") {
                quantity = "72 Pieces";
            } else if (val === "10") {
                quantity = "80 Pieces";
            }

        } else if (qtypei === "5") {
            if (val === "1") {
                quantity = "5 Pieces";
            } else if (val === "2") {
                quantity = "10 Pieces";
            } else if (val === "3") {
                quantity = "15 Pieces";
            } else if (val === "4") {
                quantity = "20 Pieces";
            } else if (val === "5") {
                quantity = "25 Pieces";
            } else if (val === "6") {
                quantity = "30 Pieces";
            } else if (val === "7") {
                quantity = "35 Pieces";
            } else if (val === "8") {
                quantity = "40 Pieces";
            } else if (val === "9") {
                quantity = "45 Pieces";
            } else if (val === "10") {
                quantity = "50 Pieces";
            }

        } else if (qtypei === "6") {
            if (val === "1") {
                quantity = "6 Pieces";
            } else if (val === "2") {
                quantity = "12 Pieces";
            } else if (val === "3") {
                quantity = "18 Pieces";
            } else if (val === "4") {
                quantity = "24 Pieces";
            } else if (val === "5") {
                quantity = "30 Pieces";
            } else if (val === "6") {
                quantity = "36 Pieces";
            } else if (val === "7") {
                quantity = "42 Pieces";
            } else if (val === "8") {
                quantity = "48 Pieces";
            } else if (val === "9") {
                quantity = "54 Pieces";
            } else if (val === "10") {
                quantity = "60 Pieces";
            }
        } else if (qtypei === "7") {
            if (val === "1") {
                quantity = "1 Bag";
            } else if (val === "2") {
                quantity = "2 Bags";
            } else if (val === "3") {
                quantity = "3 Bags";
            } else if (val === "4") {
                quantity = "4 Bags";
            } else if (val === "5") {
                quantity = "5 Bags";
            } else if (val === "6") {
                quantity = "6 Bags";
            } else if (val === "7") {
                quantity = "7 Bags";
            } else if (val === "8") {
                quantity = "8 Bags";
            } else if (val === "9") {
                quantity = "9 Bags";
            } else if (val === "10") {
                quantity = "10 Bags";
            }
        }
    } else {
        if (ftypei === "1") {
            if (val === "1") {
                quantity = "1 KG";
            } else if (val === "2") {
                quantity = "2 KG";
            } else if (val === "3") {
                quantity = "3 KG";
            } else if (val === "4") {
                quantity = "4 KG";
            } else if (val === "5") {
                quantity = "5 KG";
            } else if (val === "6") {
                quantity = "6 KG";
            } else if (val === "7") {
                quantity = "7 KG";
            } else if (val === "8") {
                quantity = "8 KG";
            } else if (val === "9") {
                quantity = "9 KG";
            } else if (val === "10") {
                quantity = "10 KG";
            }
        } else if (ftypei === "2") {
            if (val === "1") {
                quantity = "6 Pieces";
            } else if (val === "2") {
                quantity = "12 Pieces";
            } else if (val === "3") {
                quantity = "18 Pieces";
            } else if (val === "4") {
                quantity = "24 Pieces";
            } else if (val === "5") {
                quantity = "30 Pieces";
            } else if (val === "6") {
                quantity = "36 Pieces";
            } else if (val === "7") {
                quantity = "42 Pieces";
            } else if (val === "8") {
                quantity = "48 Pieces";
            } else if (val === "9") {
                quantity = "54 Pieces";
            } else if (val === "10") {
                quantity = "60 Pieces";
            }

        } else if (ftypei === "3") {
            if (val === "1") {
                quantity = "5 Pieces";
            } else if (val === "2") {
                quantity = "10 Pieces";
            } else if (val === "3") {
                quantity = "15 Pieces";
            } else if (val === "4") {
                quantity = "20 Pieces";
            } else if (val === "5") {
                quantity = "25 Pieces";
            } else if (val === "6") {
                quantity = "30 Pieces";
            } else if (val === "7") {
                quantity = "35 Pieces";
            } else if (val === "8") {
                quantity = "40 Pieces";
            } else if (val === "9") {
                quantity = "45 Pieces";
            } else if (val === "10") {
                quantity = "50 Pieces";
            }
        } else {
            if (qtypei === "0") {
                if (val === "1") {
                    quantity = "1 Piece";
                } else if (val === "2") {
                    quantity = "2  Pieces";
                } else if (val === "3") {
                    quantity = "3 Pieces";
                } else if (val === "4") {
                    quantity = "4 Pieces";
                } else if (val === "5") {
                    quantity = "5 Pieces";
                } else if (val === "6") {
                    quantity = "6 Pieces";
                } else if (val === "7") {
                    quantity = "7 Pieces";
                } else if (val === "8") {
                    quantity = "8 Pieces";
                } else if (val === "9") {
                    quantity = "9 Pieces";
                } else if (val === "10") {
                    quantity = "10 Pieces";
                }
            } else if (qtypei === "1") {
                if (val === "1") {
                    quantity = "1 Item";
                } else if (val === "2") {
                    quantity = "2 Items";
                } else if (val === "3") {
                    quantity = "3 Items";
                } else if (val === "4") {
                    quantity = "4 Items";
                } else if (val === "5") {
                    quantity = "5 Items";
                } else if (val === "6") {
                    quantity = "6 Items";
                } else if (val === "7") {
                    quantity = "7 Items";
                } else if (val === "8") {
                    quantity = "8 Items";
                } else if (val === "9") {
                    quantity = "9 Items";
                } else if (val === "10") {
                    quantity = "10 Items";
                }
            } else if (qtypei === "2") {
                if (val === "1") {
                    quantity = "1 Box";
                } else if (val === "2") {
                    quantity = "2 Boxes";
                } else if (val === "3") {
                    quantity = "3 Boxes";
                } else if (val === "4") {
                    quantity = "4 Boxes";
                } else if (val === "5") {
                    quantity = "5 Boxes";
                } else if (val === "6") {
                    quantity = "6 Boxes";
                } else if (val === "7") {
                    quantity = "7 Boxes";
                } else if (val === "8") {
                    quantity = "8 Boxes";
                } else if (val === "9") {
                    quantity = "9 Boxes";
                } else if (val === "10") {
                    quantity = "10 Boxes";
                }
            } else if (qtypei === "3") {
                if (val === "1") {
                    quantity = "4 Pieces";
                } else if (val === "2") {
                    quantity = "8 Pieces";
                } else if (val === "3") {
                    quantity = "12 Pieces";
                } else if (val === "4") {
                    quantity = "16 Pieces";
                } else if (val === "5") {
                    quantity = "20 Pieces";
                } else if (val === "6") {
                    quantity = "24 Pieces";
                } else if (val === "7") {
                    quantity = "28 Pieces";
                } else if (val === "8") {
                    quantity = "32 Pieces";
                } else if (val === "9") {
                    quantity = "36 Pieces";
                } else if (val === "10") {
                    quantity = "40 Pieces";
                }

            } else if (qtypei === "4") {
                if (val === "1") {
                    quantity = "8 Pieces";
                } else if (val === "2") {
                    quantity = "16 Pieces";
                } else if (val === "3") {
                    quantity = "24 Pieces";
                } else if (val === "4") {
                    quantity = "32 Pieces";
                } else if (val === "5") {
                    quantity = "40 Pieces";
                } else if (val === "6") {
                    quantity = "48 Pieces";
                } else if (val === "7") {
                    quantity = "56 Pieces";
                } else if (val === "8") {
                    quantity = "64 Pieces";
                } else if (val === "9") {
                    quantity = "72 Pieces";
                } else if (val === "10") {
                    quantity = "80 Pieces";
                }

            } else if (qtypei === "5") {
                if (val === "1") {
                    quantity = "5 Pieces";
                } else if (val === "2") {
                    quantity = "10 Pieces";
                } else if (val === "3") {
                    quantity = "15 Pieces";
                } else if (val === "4") {
                    quantity = "20 Pieces";
                } else if (val === "5") {
                    quantity = "25 Pieces";
                } else if (val === "6") {
                    quantity = "30 Pieces";
                } else if (val === "7") {
                    quantity = "35 Pieces";
                } else if (val === "8") {
                    quantity = "40 Pieces";
                } else if (val === "9") {
                    quantity = "45 Pieces";
                } else if (val === "10") {
                    quantity = "50 Pieces";
                }

            } else if (qtypei === "6") {
                if (val === "1") {
                    quantity = "6 Pieces";
                } else if (val === "2") {
                    quantity = "12 Pieces";
                } else if (val === "3") {
                    quantity = "18 Pieces";
                } else if (val === "4") {
                    quantity = "24 Pieces";
                } else if (val === "5") {
                    quantity = "30 Pieces";
                } else if (val === "6") {
                    quantity = "36 Pieces";
                } else if (val === "7") {
                    quantity = "42 Pieces";
                } else if (val === "8") {
                    quantity = "48 Pieces";
                } else if (val === "9") {
                    quantity = "54 Pieces";
                } else if (val === "10") {
                    quantity = "60 Pieces";
                }
            } else if (qtypei === "7") {
                if (val === "1") {
                    quantity = "1 Bag";
                } else if (val === "2") {
                    quantity = "2 Bags";
                } else if (val === "3") {
                    quantity = "3 Bags";
                } else if (val === "4") {
                    quantity = "4 Bags";
                } else if (val === "5") {
                    quantity = "5 Bags";
                } else if (val === "6") {
                    quantity = "6 Bags";
                } else if (val === "7") {
                    quantity = "7 Bags";
                } else if (val === "8") {
                    quantity = "8 Bags";
                } else if (val === "9") {
                    quantity = "9 Bags";
                } else if (val === "10") {
                    quantity = "10 Bags";
                }
            }
        }
    }
    return quantity
}

function update() {
    if (isOpenTime()) {
        let doneBtn = document.getElementById("done");
        doneBtn.disabled = false;
        try {
            doneBtn.classList.remove("disable");
        } catch {
        }
    } else {
        let doneBtn = document.getElementById("done");
        doneBtn.disabled = true;
        doneBtn.classList.add("disable");
    }

    if (locationDenied) {
        alert("You'll need to Allow (Location Access) to Place Your Order!");
        getLocation();
    }
    document.getElementById("image").src = img;

    let x = document.getElementById("cond");

    if (type === "0") {
        let y = document.createElement("option");
        y.text = "Cooked";
        y.value = "1";
        if (x.options[0].text === null || x.options[0].text !== "Cooked") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (type === "1") {
        let y = document.createElement("option");
        let z = document.createElement("option");
        y.text = "Roasted";
        z.text = "Frozen";
        y.value = "1";
        z.value = "2";

        if (x.options[0].text === null || x.options[0].text !== "Roasted" || x.options[1].text === null || x.options[1].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.add(z);
            x.selectedIndex = 0;
        }
    } else if (type === "2") {
        let y = document.createElement("option");
        let z = document.createElement("option");
        y.text = "Fried";
        z.text = "Frozen";
        y.value = "1";
        z.value = "2";

        if (x.options[0].text === null || x.options[0].text !== "Fried" || x.options[1].text === null || x.options[1].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.add(z);
            x.selectedIndex = 0;
        }
    } else if (type === "3") {
        let y = document.createElement("option");
        y.text = "Fried";
        y.value = "1";

        if (x.options[0].text === null || x.options[0].text !== "Fried") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (type === "4") {
        let y = document.createElement("option");
        y.text = "Frozen";
        y.value = "1";

        if (x.options[0].text === null || x.options[0].text !== "Frozen") {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (type === "5") {
        let y = document.createElement("option");
        y.text = "Roasted";
        y.value = "1";

        if (x.options[0].text === null || x.options[0].text !== "Roasted") {

        } else {
            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    } else if (type === "6") {
        let y = document.createElement("option");
        y.text = "Bag";
        y.value = "1";

        if (x.options[0].text === null || x.options[0].text !== "Bag") {

            x.options.length = 0;
            x.add(y);
            x.selectedIndex = 0;
        }
    }

    let v1 = document.getElementById("quan");

    if (document.getElementById("name").textContent !== name) {
        x.selectedIndex = 0;
    }
    if (x.selectedIndex === 0) {
        if (qtype === "0") {

            if (v1.options[0].text !== null && v1.options[0].text === "1 Piece" && v1.options[1].text !== null && v1.options[1].text === "2 Pieces" && v1.options[2].text !== null && v1.options[2].text === "3 Pieces" && v1.options[3].text !== null && v1.options[3].text === "4 Pieces" && v1.options[4].text !== null && v1.options[4].text === "5 Pieces" && v1.options[5].text !== null && v1.options[5].text === "6 Pieces" && v1.options[6].text !== null && v1.options[6].text === "7 Pieces" && v1.options[7].text !== null && v1.options[7].text === "8 Pieces" && v1.options[8].text !== null && v1.options[8].text === "9 Pieces" && v1.options[9].text !== null && v1.options[9].text === "10 Pieces") {
            } else {
                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Piece";
                v1.add(w1);
                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }
        } else if (qtype === "1") {
            if (v1.options[0].text !== null && v1.options[0].text === "1 Item" && v1.options[1].text !== null && v1.options[1].text === "2 Items" && v1.options[2].text !== null && v1.options[2].text === "3 Items" && v1.options[3].text !== null && v1.options[3].text === "4 Items" && v1.options[4].text !== null && v1.options[4].text === "5 Items" && v1.options[5].text !== null && v1.options[5].text === "6 Items" && v1.options[6].text !== null && v1.options[6].text === "7 Items" && v1.options[7].text !== null && v1.options[7].text === "8 Items" && v1.options[8].text !== null && v1.options[8].text === "9 Items" && v1.options[9].text !== null && v1.options[9].text === "10 Items") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Item";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Items";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Items";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Items";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Items";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Items";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Items";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Items";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Items";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Items";
                v1.add(w10);
                v1.selectedIndex = 0;
            }

        } else if (qtype === "2") {
            if (v1.options[0].text !== null && v1.options[0].text === "1 Box" && v1.options[1].text !== null && v1.options[1].text === "2 Boxes" && v1.options[2].text !== null && v1.options[2].text === "3 Boxes" && v1.options[3].text !== null && v1.options[3].text === "4 Boxes" && v1.options[4].text !== null && v1.options[4].text === "5 Boxes" && v1.options[5].text !== null && v1.options[5].text === "6 Boxes" && v1.options[6].text !== null && v1.options[6].text === "7 Boxes" && v1.options[7].text !== null && v1.options[7].text === "8 Boxes" && v1.options[8].text !== null && v1.options[8].text === "9 Boxes" && v1.options[9].text !== null && v1.options[9].text === "10 Boxes") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Box";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Boxes";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Boxes";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Boxes";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Boxes";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Boxes";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Boxes";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Boxes";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Boxes";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Boxes";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtype === "3") {
            if (v1.options[0].text !== null && v1.options[0].text === "4 Pieces" && v1.options[1].text !== null && v1.options[1].text === "8 Pieces" && v1.options[2].text !== null && v1.options[2].text === "12 Pieces" && v1.options[3].text !== null && v1.options[3].text === "16 Pieces" && v1.options[4].text !== null && v1.options[4].text === "20 Pieces" && v1.options[5].text !== null && v1.options[5].text === "24 Pieces" && v1.options[6].text !== null && v1.options[6].text === "28 Pieces" && v1.options[7].text !== null && v1.options[7].text === "32 Pieces" && v1.options[8].text !== null && v1.options[8].text === "36 Pieces" && v1.options[9].text !== null && v1.options[9].text === "40 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "4";
                w1.text = "4 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "8";
                w2.text = "8 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "12";
                w3.text = "12 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "16";
                w4.text = "16 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "20";
                w5.text = "20 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "24";
                w6.text = "24 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "28";
                w7.text = "28 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "32";
                w8.text = "32 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "36";
                w9.text = "36 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "40";
                w10.text = "40 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtype === "4") {
            if (v1.options[0].text !== null && v1.options[0].text === "8 Pieces" && v1.options[1].text !== null && v1.options[1].text === "16 Pieces" && v1.options[2].text !== null && v1.options[2].text === "24 Pieces" && v1.options[3].text !== null && v1.options[3].text === "32 Pieces" && v1.options[4].text !== null && v1.options[4].text === "40 Pieces" && v1.options[5].text !== null && v1.options[5].text === "48 Pieces" && v1.options[6].text !== null && v1.options[6].text === "56 Pieces" && v1.options[7].text !== null && v1.options[7].text === "64 Pieces" && v1.options[8].text !== null && v1.options[8].text === "72 Pieces" && v1.options[9].text !== null && v1.options[9].text === "80 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "8";
                w1.text = "8 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "16";
                w2.text = "16 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "24";
                w3.text = "24 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "32";
                w4.text = "32 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "40";
                w5.text = "40 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "48";
                w6.text = "48 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "56";
                w7.text = "56 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "64";
                w8.text = "64 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "72";
                w9.text = "72 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "80";
                w10.text = "80 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtype === "5") {
            if (v1.options[0].text !== null && v1.options[0].text === "5 Pieces" && v1.options[1].text !== null && v1.options[1].text === "10 Pieces" && v1.options[2].text !== null && v1.options[2].text === "15 Pieces" && v1.options[3].text !== null && v1.options[3].text === "20 Pieces" && v1.options[4].text !== null && v1.options[4].text === "25 Pieces" && v1.options[5].text !== null && v1.options[5].text === "30 Pieces" && v1.options[6].text !== null && v1.options[6].text === "35 Pieces" && v1.options[7].text !== null && v1.options[7].text === "40 Pieces" && v1.options[8].text !== null && v1.options[8].text === "45 Pieces" && v1.options[9].text !== null && v1.options[9].text === "50 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "5";
                w1.text = "5 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "10";
                w2.text = "10 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "15";
                w3.text = "15 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "20";
                w4.text = "20 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "25";
                w5.text = "25 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "30";
                w6.text = "30 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "35";
                w7.text = "35 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "40";
                w8.text = "40 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "45";
                w9.text = "45 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "50";
                w10.text = "50 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtype === "6") {
            if (v1.options[0].text !== null && v1.options[0].text === "6 Pieces" && v1.options[1].text !== null && v1.options[1].text === "12 Pieces" && v1.options[2].text !== null && v1.options[2].text === "18 Pieces" && v1.options[3].text !== null && v1.options[3].text === "24 Pieces" && v1.options[4].text !== null && v1.options[4].text === "30 Pieces" && v1.options[5].text !== null && v1.options[5].text === "36 Pieces" && v1.options[6].text !== null && v1.options[6].text === "42 Pieces" && v1.options[7].text !== null && v1.options[7].text === "48 Pieces" && v1.options[8].text !== null && v1.options[8].text === "54 Pieces" && v1.options[9].text !== null && v1.options[9].text === "60 Pieces") {
            } else {
                v1.options.length = 0;

                let w1 = document.createElement("option");
                w1.value = "6";
                w1.text = "6 Pieces";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "12";
                w2.text = "12 Pieces";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "18";
                w3.text = "18 Pieces";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "24";
                w4.text = "24 Pieces";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "30";
                w5.text = "30 Pieces";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "36";
                w6.text = "36 Pieces";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "42";
                w7.text = "42 Pieces";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "48";
                w8.text = "48 Pieces";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "54";
                w9.text = "54 Pieces";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "60";
                w10.text = "60 Pieces";
                v1.add(w10);
                v1.selectedIndex = 0;

            }

        } else if (qtype === "7") {
            if (v1.options[0].text !== null && v1.options[0].text === "1 Bag" && v1.options[1].text !== null && v1.options[1].text === "2 Bag" && v1.options[2].text !== null && v1.options[2].text === "3 Bag" && v1.options[3].text !== null && v1.options[3].text === "4 Bag" && v1.options[4].text !== null && v1.options[4].text === "5 Bag" && v1.options[5].text !== null && v1.options[5].text === "6 Bag" && v1.options[6].text !== null && v1.options[6].text === "7 Bag" && v1.options[7].text !== null && v1.options[7].text === "8 Bag" && v1.options[8].text !== null && v1.options[8].text === "9 Bag" && v1.options[9].text !== null && v1.options[9].text === "10 Bag") {
            } else {

                v1.options.length = 0;
                let w1 = document.createElement("option");
                w1.value = "1";
                w1.text = "1 Bag";
                v1.add(w1);

                let w2 = document.createElement("option");
                w2.value = "2";
                w2.text = "2 Bag";
                v1.add(w2);

                let w3 = document.createElement("option");
                w3.value = "3";
                w3.text = "3 Bag";
                v1.add(w3);

                let w4 = document.createElement("option");
                w4.value = "4";
                w4.text = "4 Bag";
                v1.add(w4);

                let w5 = document.createElement("option");
                w5.value = "5";
                w5.text = "5 Bag";
                v1.add(w5);

                let w6 = document.createElement("option");
                w6.value = "6";
                w6.text = "6 Bag";
                v1.add(w6);

                let w7 = document.createElement("option");
                w7.value = "7";
                w7.text = "7 Bag";
                v1.add(w7);

                let w8 = document.createElement("option");
                w8.value = "8";
                w8.text = "8 Bag";
                v1.add(w8);

                let w9 = document.createElement("option");
                w9.value = "9";
                w9.text = "9 Bag";
                v1.add(w9);

                let w10 = document.createElement("option");
                w10.value = "10";
                w10.text = "10 Bag";
                v1.add(w10);
                v1.selectedIndex = 0;

            }
        } else {
            if (ftype === "1") {
                if (v1.options[0].text !== null && v1.options[0].text === "1 KG" && v1.options[1].text !== null && v1.options[1].text === "2 KG" && v1.options[2].text !== null && v1.options[2].text === "3 KG" && v1.options[3].text !== null && v1.options[3].text === "4 KG" && v1.options[4].text !== null && v1.options[4].text === "5 KG" && v1.options[5].text !== null && v1.options[5].text === "6 KG" && v1.options[6].text !== null && v1.options[6].text === "7 KG" && v1.options[7].text !== null && v1.options[7].text === "8 KG" && v1.options[8].text !== null && v1.options[8].text === "9 KG" && v1.options[9].text !== null && v1.options[9].text === "10 KG") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "1";
                    w1.text = "1 KG";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "2";
                    w2.text = "2 KG";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "3";
                    w3.text = "3 KG";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "4";
                    w4.text = "4 KG";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "5";
                    w5.text = "5 KG";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "6";
                    w6.text = "6 KG";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "7";
                    w7.text = "7 KG";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "8";
                    w8.text = "8 KG";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "9";
                    w9.text = "9 KG";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "10";
                    w10.text = "10 KG";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            } else if (ftype === "2") {
                if (v1.options[0].text !== null && v1.options[0].text === "6 Pieces" && v1.options[1].text !== null && v1.options[1].text === "12 Pieces" && v1.options[2].text !== null && v1.options[2].text === "18 Pieces" && v1.options[3].text !== null && v1.options[3].text === "24 Pieces" && v1.options[4].text !== null && v1.options[4].text === "30 Pieces" && v1.options[5].text !== null && v1.options[5].text === "36 Pieces" && v1.options[6].text !== null && v1.options[6].text === "42 Pieces" && v1.options[7].text !== null && v1.options[7].text === "48 Pieces" && v1.options[8].text !== null && v1.options[8].text === "54 Pieces" && v1.options[9].text !== null && v1.options[9].text === "60 Pieces") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "6";
                    w1.text = "6 Pieces";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "12";
                    w2.text = "12 Pieces";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "18";
                    w3.text = "18 Pieces";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "24";
                    w4.text = "24 Pieces";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "30";
                    w5.text = "30 Pieces";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "36";
                    w6.text = "36 Pieces";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "42";
                    w7.text = "42 Pieces";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "48";
                    w8.text = "48 Pieces";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "54";
                    w9.text = "54 Pieces";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "60";
                    w10.text = "60 Pieces";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            } else if (ftype === "3") {
                if (v1.options[0].text !== null && v1.options[0].text === "5 Pieces" && v1.options[1].text !== null && v1.options[1].text === "10 Pieces" && v1.options[2].text !== null && v1.options[2].text === "15 Pieces" && v1.options[3].text !== null && v1.options[3].text === "20 Pieces" && v1.options[4].text !== null && v1.options[4].text === "25 Pieces" && v1.options[5].text !== null && v1.options[5].text === "30 Pieces" && v1.options[6].text !== null && v1.options[6].text === "35 Pieces" && v1.options[7].text !== null && v1.options[7].text === "40 Pieces" && v1.options[8].text !== null && v1.options[8].text === "45 Pieces" && v1.options[9].text !== null && v1.options[9].text === "50 Pieces") {
                } else {
                    v1.options.length = 0;
                    let w1 = document.createElement("option");
                    w1.value = "5";
                    w1.text = "5 Pieces";
                    v1.add(w1);

                    let w2 = document.createElement("option");
                    w2.value = "10";
                    w2.text = "10 Pieces";
                    v1.add(w2);

                    let w3 = document.createElement("option");
                    w3.value = "15";
                    w3.text = "15 Pieces";
                    v1.add(w3);

                    let w4 = document.createElement("option");
                    w4.value = "20";
                    w4.text = "20 Pieces";
                    v1.add(w4);

                    let w5 = document.createElement("option");
                    w5.value = "25";
                    w5.text = "25 Pieces";
                    v1.add(w5);

                    let w6 = document.createElement("option");
                    w6.value = "30";
                    w6.text = "30 Pieces";
                    v1.add(w6);

                    let w7 = document.createElement("option");
                    w7.value = "35";
                    w7.text = "35 Pieces";
                    v1.add(w7);

                    let w8 = document.createElement("option");
                    w8.value = "40";
                    w8.text = "40 Pieces";
                    v1.add(w8);

                    let w9 = document.createElement("option");
                    w9.value = "45";
                    w9.text = "45 Pieces";
                    v1.add(w9);

                    let w10 = document.createElement("option");
                    w10.value = "50";
                    w10.text = "50 Pieces";
                    v1.add(w10);
                    v1.selectedIndex = 0;

                }

            }
        }
    }

    if (document.getElementById("name").textContent !== name) {
        v1.selectedIndex = 0;
    }

    document.getElementById("name").textContent = name;

    quanv = v1.options[v1.selectedIndex].value;

    quan = v1.options.selectedIndex + 1;

    cond = x.selectedIndex;

    if (name.includes("Deal #")) {
        let drinkSpinner = document.getElementById("drink");
        document.getElementById("drinkName").style.display = "block";
        drinkSpinner.style.display = "block";
        drink = drinkSpinner.options[drinkSpinner.selectedIndex].value;
    } else {
        document.getElementById("drink").style.display = "none";
        document.getElementById("drinkName").style.display = "none";
        drink = "0";
        document.getElementById("drink").selectedIndex = 0;
    }

    let order = (cond === 0) ? roast : frozen;

    oc = order * quan;

    document.getElementById("or").textContent = "Order : " + oc + "/-Rs";

    if (dis === 0) {
        delivery = "(KM × 10/-RS)";
        document.getElementById("del").textContent = "Delivery : (KM × 10/-RS)";
        fin = "(Delivery × " + oc + "/-RS)";
        document.getElementById("tot").textContent = "Total : (Delivery × " + oc + "/-RS)";
    } else {
        document.getElementById("del").textContent = "Delivery : " + dis + "/-RS";
        delivery = dis + "/-RS";
        fin = (+oc + +dis) + "/-RS";
        document.getElementById("tot").textContent = "Total : " + fin;
    }
}

function done() {
    let con = document.getElementById("cond").selectedIndex;
    let cd;
    let item;

    if (type === "0") {
        cd = "Cooked";
    } else if (type === "1") {
        if (con === 0) {
            cd = "Roasted";
        } else {
            cd = "Frozen";
        }
    } else if (type === "2") {
        if (con === 0) {
            cd = "Fried";
        } else {
            cd = "Frozen";
        }
    } else if (type === "3") {
        cd = "Fried";
    } else if (type === "4") {
        cd = "Frozen";
    } else if (type === "5") {
        cd = "Roasted";
    } else if (type === "6") {
        cd = "Bag";
    }

    if (con === 0) {
        if (qtype === "0") {
            if (quan === 1) {
                item = "Piece";
            } else {
                item = "Pieces";
            }
        } else if (qtype === "1") {
            if (quan === 1) {
                item = "Item";
            } else {
                item = "Items";
            }
        } else if (qtype === "2") {
            if (quan === 1) {
                item = "Box";
            } else {
                item = "Boxes";
            }
        } else if (qtype === "7") {
            if (quan === 1) {
                item = "Bag";
            } else {
                item = "Bags";
            }
        } else {
            item = "Pieces";
        }
    } else {
        if (ftype === "0") {
            if (quan === 1) {
                item = "Piece";
            } else {
                item = "Pieces";
            }
        } else if (ftype === "1") {
            item = "KG";
        } else {
            item = "Pieces";
        }
    }

    let finDrink = "";
    if (drink === "0") {
        finDrink = ""
    } else if (drink === "1") {
        finDrink = "Cold Drink : Random%0A"
    } else if (drink === "2") {
        finDrink = "Cold Drink : Coke%0A"
    } else if (drink === "3") {
        finDrink = "Cold Drink : Sprite%0A"
    } else if (drink === "4") {
        finDrink = "Cold Drink : Fanta%0A"
    }

    let locate;
    if (lat !== undefined
        && lat !== ""
        && lat !== null
        && long !== undefined
        && long !== ""
        && long !== null) {
        locate = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + long;
    } else {
        locate = "N%2FA";
    }

    let readyOrder = "Order Number : #" + orderNo + "%0A"
        + "Name : " + name + "%0A"
        + "Quantity : " + quanv + " " + item + "%0A"
        + "Condition : " + cd + "%0A"
        + finDrink + "Order : " + oc + "/-RS" + "%0A"
        + "Delivery : " + delivery + "%0A"
        + "Total : " + fin + "%0A"
        + "Location : " + locate + "%0A"
        + "Additional Message : ";
    waOrder = readyOrder
        .replace(/ /g, "%20")
        .replace(/:/g, "%3A")
        .replace(/\//g, "%2F")
        .replace(/;/g, "%3B")
        .replace(/@/g, "%40")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/=/g, "%3D")
        .replace(/&/g, "%26")
        .replace(/\$/g, "%24")
        .replace(/#/g, "%23")
        .replace(/\+/g, "%2B")
        .replace(/,/g, "%2C")
        .replace(/\?/g, "%3F");

    smsOrder = readyOrder
        .replace(/ /g, "%20")
        .replace(/:/g, "%3A")
        .replace(/\//g, "%2F")
        .replace(/;/g, "%3B")
        .replace(/@/g, "%40")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/=/g, "%3D")
        .replace(/&/g, "%2526")
        .replace(/\$/g, "%24")
        .replace(/#/g, "%23")
        .replace(/\+/g, "%2B")
        .replace(/,/g, "%2C")
        .replace(/\?/g, "%3F");

    document.getElementById('sendDialog').style.display = 'flex';
}

function contact() {
    document.getElementById("callDialog").style.display = "flex";
}

function closeCallDialog() {
    document.getElementById("callDialog").style.display = "none";
}

function sendWa() {
    window.open("https://wa.me/923228054617?text=" + waOrder, "_blank");
    document.getElementById('sendDialog').style.display = 'none';
}

function sendSms() {
    window.open("sms:923228054617?body=" + smsOrder, "_blank");
    document.getElementById('sendDialog').style.display = 'none';
}

function haveApp() {
    setCookie("isAppInstalled", "true");
    document.getElementById("appDialog").style.display = "none";
}

function closeApp() {
    setCookie("isAppInstalled", "false");
    document.getElementById("appDialog").style.display = "none";
}

function showApp() {
    if (getCookie("isAppInstalled") !== null
        && getCookie("isAppInstalled") === "") {
        setCookie("isAppInstalled", "false");
        document.getElementById("appDialog").style.display = "flex";
    } else {
        if (getCookie("isAppInstalled") === "true") {
            document.getElementById("appDialog").style.display = "";
        } else {
            document.getElementById("appDialog").style.display = "flex";
        }
    }
}

function openDeals() {
    if (document.getElementById('deal1').getAttribute('src') === 'images/no_image.svg') {
        document.getElementById('deal1').src = 'images/deal1.svg';
    }
    if (document.getElementById("our_deals").style.display === "none") {
        document.getElementById("deals").textContent = "Our Deals (17) -";
        document.getElementById("our_deals").style.display = "block";
    } else {
        document.getElementById("deals").textContent = "Our Deals (17) +";
        document.getElementById("our_deals").style.display = "none";
    }
}

function openMenu() {
    if (document.getElementById("menu_list").style.display === "none") {
        document.getElementById("menu").textContent = "Our Menu (43) -";
        document.getElementById("menu_list").style.display = "block";
    } else {
        document.getElementById("menu").textContent = "Our Menu (43) +";
        document.getElementById("menu_list").style.display = "none";
    }
}

function isOpenTime() {
    if (new Date().getDay() === 5) {
        return new Date().getHours() >= 15;
    } else {
        return new Date().getHours() >= 12;
    }
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) !== -1) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + ";expires=Tue, 31 Dec 2030 12:00:00 GMT"
}

function delCookie(name) {
    document.cookie = name + "=;expires=Thu; 01 Jan 1970"
}

function isEmptyOrNull(val) {
    return val == null || val === "";
}
