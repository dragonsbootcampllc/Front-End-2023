class Website {
    constructor(name, domain, content, visitors) {
      this.name = name;
      this.domain = domain;
      this.content = content;
      this.visitors = visitors;
    }
  
    // Getter methods
    getName() {
      return this.name;
    }
  
    getDomain() {
      return this.domain;
    }
  
    getContent() {
      return this.content;
    }
  
    getVisitors() {
      return this.visitors;
    }
  
    // Setter methods
    setName(name) {
      this.name = name;
    }
  
    setDomain(domain) {
      this.domain = domain;
    }
  
    setContent(content) {
      this.content = content;
    }
  
    setVisitors(visitors) {
      this.visitors = visitors;
    }
  
    // Additional methods
    displayWebsiteInfo() {
      console.log(`Website Name: ${this.name}`);
      console.log(`Domain: ${this.domain}`);
      console.log(`Content: ${this.content}`);
      console.log(`Visitors: ${this.visitors}`);
    }
  }
  
  // Example usage:
  const myWebsite = new Website("My Website", "www.mywebsite.com", "Blog", 1000);
  myWebsite.displayWebsiteInfo();
