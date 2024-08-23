document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const studentPrn = document.getElementById('studentPrn').value.trim();
        const teacherId = document.getElementById('teacherId').value.trim();
        const clarity = document.querySelector('input[name="clarity"]:checked');
        const engagement = document.querySelector('input[name="engagement"]:checked');
        const support = document.querySelector('input[name="support"]:checked');
        
        // Validation checks
        if (!studentPrn || !teacherId) {
            alert('Student PRN and Teacher ID are required.');
            return;
        }

        if (!clarity || !engagement || !support) {
            alert('Please answer all the feedback questions.');
            return;
        }

        // Show success alert
        alert('Successfully submitted!');
        
        // Optionally, reset the form
        form.reset();
    });
});
