document.addEventListener('DOMContentLoaded', function() {
    const studentCheckbox = document.getElementById('studentCheckbox');
    const teacherCheckbox = document.getElementById('teacherCheckbox');
    const roleForm = document.getElementById('roleForm');

    studentCheckbox.addEventListener('change', function() {
        if (this.checked) {
            teacherCheckbox.checked = false;
        }
    });

    teacherCheckbox.addEventListener('change', function() {
        if (this.checked) {
            studentCheckbox.checked = false;
        }
    });

    nextButton.addEventListener('click', function() {
        if (!studentCheckbox.checked && !teacherCheckbox.checked) {
            alert('Please select a role.');
        } else {
            const role = studentCheckbox.checked ? 'student' : 'teacher'
            if (role === 'student') {
                window.location.href = 'student.html';
            } else if (role === 'teacher') {
                window.location.href = 'teacher.html';
            }
        }
    });
});
