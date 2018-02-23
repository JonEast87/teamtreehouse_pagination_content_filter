// jshint esversion: 6

$(document).ready(function() {
    const students = $('.student-item');
    let number = 0;

    function hideAll(students) {
        return $(students).css('display', 'none');
    }

    function appendPageLinks(students) {
        $.each(students, function(index, value) {
            if (index % 9 === 0) {
                number++;
                $(this).addClass(`${number}`);
                $('.pagination > ul').append(`<li><a href="#">${number}</a></li>`);
            } else {
                $(this).addClass(`${number}`);
            }
        });
    }

    function showPage(page, students) {
        hideAll(students);
        $.each(students, function(index, value) {
            if ($(value).hasClass(page)) {
                $(value).css('display', 'block');
            }
        });
    }

    function search(term) {
        hideAll(students);
        $('.student-details > h3').each(function () {
            if ($(this).text() === term) {
                console.log($(this).parentsUntil('ul').css('display', 'block'));
            }
        });
    }
    
    appendPageLinks(students);
    hideAll(students);

    $('.student-search > button').on('click', function() {
        const term = $('.student-search > input').val();
        search(term);
    });

    $('li > a').on('click', function() {
        let call = this.innerHTML;
        showPage(call, students);
    });
});