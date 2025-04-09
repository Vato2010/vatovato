function messageOne() {
    console.log("⏳ Message 1: Starting process...");
    setTimeout(messageTwo, 1000); // 1 წამში
  }
  
  function messageTwo() {
    console.log("🔧 Message 2: Processing data...");
    setTimeout(messageThree, 1000); // 1 წამში
  }
  
  function messageThree() {
    console.log("✅ Message 3: Process complete!");
    setTimeout(messageFour, 1000); // 1 წამში
  }
  
  function messageFour() {
    console.log("🎉 Message 4: Everything is done!");
  }
  
  // Start the chain
  messageOne();

  function delayedGreeting() {
    setTimeout(() => {
      console.log("👋 Hello there! Welcome!");
    }, 1000); // 1000 მილიწამი = 1 წამი
  }
  
  delayedGreeting(); // ფუნქციის გაშვება
  
  