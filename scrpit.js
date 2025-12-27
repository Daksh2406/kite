document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // डेटा प्राप्त करना
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // साधारण वैलिडेशन चेक
    if(mobile.length !== 10) {
        alert("कृपया 10 अंकों का मोबाइल नंबर डालें।");
        return;
    }

    alert('नमस्ते ${name}! आपका फॉर्म सफलतापूर्वक सबमिट हो गया है।');
    
    // यहाँ आप डेटा को सर्वर पर भेजने का कोड लिख सकते हैं
    console.log("Form Submitted", { name, email, mobile });
});document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form ko refresh hone se rokne ke liye

    // Input values lena
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;

    // Validation logic
    if(mobile.length !== 10) {
        alert("Kripya 10 ankon ka sahi mobile number bharein.");
        return;
    }

    // Agar sab sahi hai to user ko message dikhana
    alert("Form bharne ke liye dhanyawad, " + name + "!");

    // Daksh.html par bhejne ke liye niche wali line use karein
    window.location.href = "daksh.html"; 
});