// Lab 8
// Written by Michelle Cantin

function validateProfile(e) {
    
    // Private
    e.preventDefault();
    var valid = true;

    // DOM variables
    var firstNameDom = document.getElementById("fnameAlert");
    var lastNameDom = document.getElementById("lnameAlert");
    var address1Dom = document.getElementById("address1Alert");
    var cityDom = document.getElementById("cityAlert");
    var provinceDom = document.getElementById("provinceAlert");
    var countryDom = document.getElementById("countryAlert");
    
    // Alert text
    if (profile.firstName.value == "") {
        firstNameDom.innerHTML = "Please enter a first name.";
        valid = false;
    }
    if (profile.lastName.value == "") {
        lastNameDom.innerHTML = "Please enter a last name.";
        valid = false;
    }
    if (profile.address1.value == "") {
        address1Dom.innerHTML = "Please enter an address.";
        valid = false;
    }
    if (profile.city.value == "") {
        cityDom.innerHTML = "Please enter a city.";
        valid = false;
    }
    if (profile.province.selectedIndex == 0) {
        provinceDom.innerHTML = "Please select a province.";
        valid = false;
    }
    if (profile.country.selectedIndex == 0) {
        countryDom.innerHTML = "Please select a country.";
        valid = false;
    }
    if(valid) {
        alert("Thank you!");
    }
    
    // Public
    return valid;
}