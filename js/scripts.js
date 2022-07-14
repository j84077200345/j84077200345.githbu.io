/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

$.ajax({
    type: "POST",
    url: "https://testapi2447.azurewebsites.net/TestService.asmx/TestAPI",
    dataType:"json",
    success: function(response){
        let data = response.result;
        let t_header = Object.keys(data[0]);
        
        t_header.forEach(head => {
            $("#datatablesSimple thead tr").append(`<th>${head}</th>`);
        })
        
        data.forEach((obj, index) => {
            $("#datatablesSimple tbody").append(`<tr class='row-${index}'></tr>`);
            Object.values(obj).forEach(cell => {
                $(`#datatablesSimple tbody .row-${index}`).append(`<td>${cell}</td>`);
            });
        })
        
        const datatablesSimple = document.getElementById('datatablesSimple');
        if (datatablesSimple) {
            new simpleDatatables.DataTable(datatablesSimple);
        }
    }
  });