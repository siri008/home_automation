document.addEventListener('DOMContentLoaded', function() {
    const lightSwitch = document.getElementById('light-switch');
  
    // Simulate sending commands to smart devices
    function controlLight(state) {
      // Implement your code here to control the actual smart light
      console.log('Light state:', state ? 'ON' : 'OFF');
    }
  
    // Event listener to handle changes to the light switch
    lightSwitch.addEventListener('change', function() {
      controlLight(lightSwitch.checked);
    });
  });
  