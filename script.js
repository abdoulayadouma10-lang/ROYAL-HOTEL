function searchStation() {
    const search = document.getElementById("search").value;

    if (search.trim() === "") {
        alert("يرجى كتابة اسم المحطة أو المنطقة");
    } else {
        alert("سيتم البحث عن: " + search);
    }
}