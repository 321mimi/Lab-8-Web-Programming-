// Form element events
// First name
document.getElementById("fname").addEventListener("keydown", function() {
    fnameAlert.innerHTML = "";
});

// Last name
document.getElementById("lname").addEventListener("keydown", function() {
    lnameAlert.innerHTML = "";
});

// Address 1
document.getElementById("address1").addEventListener("keydown", function() {
    address1Alert.innerHTML = "";
});

// City
document.getElementById("city").addEventListener("keydown", function() {
    cityAlert.innerHTML = "";
});

// Province
document.getElementById("province").addEventListener("click", function() {
    if(province.selectedIndex != 0) {
        provinceAlert.innerHTML = "";
    }
});

// Country
document.getElementById("country").addEventListener("click", function() {
    if(country.selectedIndex != 0) {
        countryAlert.innerHTML = "";
    }
});

// Validate call
document.profile.addEventListener("submit", validateProfile);

// Reset, already native to the browser?
document.getElementById("reset").addEventListener("click", function() {
    // Input and select
    profile.firstName.value = "";
    profile.lastName.value = "";
    profile.address1.value = "";
    profile.address2.value = "";
    profile.city.value = "";
    profile.province.selectedIndex = 0;
    profile.country.selectedIndex = 0;
    
    // Span
    document.getElementById("fnameAlert").innerHTML = "";
    document.getElementById("lnameAlert").innerHTML = "";
    document.getElementById("address1Alert").innerHTML = "";
    document.getElementById("cityAlert").innerHTML = "";
    document.getElementById("provinceAlert").innerHTML = "";
    document.getElementById("countryAlert").innerHTML = "";
    
});