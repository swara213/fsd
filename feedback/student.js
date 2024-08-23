document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const prn = document.getElementById('prn').value.trim();
        const year = document.getElementById('year').value.trim();
        const panel = document.getElementById('panel').value.trim();
        const attendance = document.getElementById('attendance').value;
        
        // Validate attendance
        if (attendance < 80) {
            alert('Attendance must be 80 or above to submit the form.');
            event.preventDefault();
            return;
        }
        
        // Validate name (only letters and spaces allowed)
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Name must contain only letters and spaces.');
            event.preventDefault();
            return;
        }
        
        // Validate PRN (10 digits)
        const prnRegex = /^\d{10}$/;
        if (!prnRegex.test(prn)) {
            alert('PRN must be exactly 10 digits.');
            event.preventDefault();
            return;
        }
        
        // Validate panel (only one letter allowed)
        const panelRegex = /^[A-Za-z]$/;
        if (!panelRegex.test(panel)) {
            alert('Panel must be a single letter.');
            event.preventDefault();
            return;
        }
        
        // Validate year (must be between 1 and 4)
        const yearRegex = /^[1-4]$/;
        if (!yearRegex.test(year)) {
            alert('Year must be a number between 1 and 4.');
            event.preventDefault();
            return;
        }
    });
});
