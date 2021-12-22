function soma(A) {
    if (A=="") {
        alert ("Digite um número");
        form1.num.focus();
    }
    else {
        form1.result.value = parseInt(form1.result.value) + parseInt(A);
        form1.total.value = parseInt(form1.total.value) + 1;
    }
    form1.num.value="";
    form1.num.focus();
}