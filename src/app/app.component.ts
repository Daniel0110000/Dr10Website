import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationButtonItem } from './NavigationButtonItem';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SkillSection } from './SkillSection';
import { ExperienceItem } from './ExperienceItem';
import { ProjectItem } from './ProjectItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss", "./app.navigationBar.scss", "./app.aboutMe.scss", "./app.skills.scss", "./app.experience.scss", "./app.projects.scss"]
})
export class AppComponent {

  private readonly imageBasePath = "../assets/images/";

  navigationButtons: NavigationButtonItem[] = [
    { 
      id: "aboutMeSectionStart",
      index: 0, 
      icon: '<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" fill="#ABB2BF"/></svg>',
      title: "About Me"
    },
    { 
      id: "skillsSectionStart",
      index: 1, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path fill="#ABB2BF" d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l300-59q37-8 66 16t29 62v477q0 29-18 51.5T576-275l-315 63q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-600q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v600q0 33-23.5 56.5T720-80H270Zm58-226q14-3 23-14t9-25v-397q0-19-14.5-31t-33.5-8q-14 3-23 14t-9 25v397q0 19 14.5 31t33.5 8Z"/></svg>',
      title: "Skills"
    },
    { 
      id: "experienceSectionStart",
      index: 2, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path fill="#ABB2BF" d="M440-360v-80h80v80h-80Zm-40-360h160v-80H400v80ZM160-120q-33 0-56.5-23.5T80-200v-160h280v40q0 17 11.5 28.5T400-280h160q17 0 28.5-11.5T600-320v-40h280v160q0 33-23.5 56.5T800-120H160ZM80-440v-200q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v200H600v-40q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480v40H80Z"/></svg>',
      title: "Experince"
    },
    { 
      id: "projectSectionStart",
      index: 3, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path fill="#ABB2BF" d="m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l184-184q12-12 28.5-12t28.5 12q12 12 12 28.5T349-635L193-479Zm574-2L612-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-12 12-28 11.5T612-269q-12-12-12-28.5t12-28.5l155-155Z"/></svg>', 
      title: "Projects"
    }
  ];

  skillSections: SkillSection[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm187-200-76-76q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l104 104q12 12 12 28t-12 28L328-308q-11 11-27.5 11.5T272-308q-11-11-11-28t11-28l75-76Zm173 160q-17 0-28.5-11.5T480-320q0-17 11.5-28.5T520-360h160q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280H520Z"/></svg>',
      title: "Programming Languages",
      skills: [
        { icon: this.imageBasePath + "ic_kotlin.webp", title: "Kotlin" },
        { icon: this.imageBasePath + "ic_java.webp", title: "Java" },
        { icon: this.imageBasePath + "ic_c.webp", title: "C" },
        { icon: this.imageBasePath + "ic_cpp.webp", title: "C++" },
        { icon: this.imageBasePath + "ic_assembly.webp", title: "Assembly x86 & x64" },
        { icon: this.imageBasePath + "ic_js.webp", title: "JavaScript" },
        { icon: this.imageBasePath + "ic_typescript.webp", title: "TypeScript" },
        { icon: this.imageBasePath + "ic_cs.webp", title: "C#" },
        { icon: this.imageBasePath + "ic_python.webp", title: "Python" }
      ]
    }, 
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="M350-63q-46 0-82.5-24T211-153q-16 21-40.5 32.5T120-109q-51 0-85.5-35T0-229q0-43 28-77.5T99-346q-14-20-21.5-42.5T70-436q0-40 20.5-75t57.5-57q5 18 13.5 38.5T181-494q-14 11-22 26.5t-8 32.5q0 56 46 69t87 21l19 32q-11 32-19 54.5t-8 40.5q0 30 21.5 52.5T350-143q38 0 63-34t41-80q16-46 24.5-93t13.5-72l78 21q-9 45-22 103t-36.5 110.5Q488-135 449.5-99T350-63Zm54-284q-46-41-83.5-76.5t-64.5-69q-27-33.5-41.5-67T200-629q0-65 44.5-109.5T354-783q4 0 7 .5t7 .5q-4-10-6-20t-2-21q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h14q60 0 102 38.5t50 95.5q-18-3-40.5-3t-41.5 2q-7-23-25.5-38T606-703q-35 0-54.5 20.5T498-623h-37q-35-41-54.5-60.5T354-703q-32 0-53 21t-21 53q0 23 13 47.5t36.5 52q23.5 27.5 57 58.5t74.5 67l-57 57ZM609-63q-22 0-43.5-6T524-88q11-14 22-33t20-35q11 7 22 10t22 3q32 0 53.5-22.5T685-219q0-19-8-41t-19-54l19-32q42-8 87.5-21t45.5-69q0-40-29.5-58T716-512q-42 0-98 16t-131 41l-21-78q78-25 139-42t112-17q69 0 121 41t52 115q0 25-7.5 47.5T861-346q43 5 71 39.5t28 77.5q0 50-34.5 85T840-109q-26 0-50.5-11.5T749-153q-20 42-56.5 66T609-63Z"/></svg>',
      title: "Frameworks",
      skills: [
        { icon: this.imageBasePath + "ic_jetpack_compose.webp", title: "Jetpack Compose" },
        { icon: this.imageBasePath + "ic_angular.webp", title: "Angular" },
        { icon: this.imageBasePath + "ic_ktor.webp", title: "Ktor" },
        { icon: this.imageBasePath + "ic_spring_boot.webp", title: "Spring Boot" },
        { icon: this.imageBasePath + "ic_node.webp", title: "NodeJS" }
      ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="M480-520q150 0 255-47t105-113q0-66-105-113t-255-47q-150 0-255 47T120-680q0 66 105 113t255 47Zm0 100q41 0 102.5-8.5T701-456q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-356q-57 19-118.5 27.5T480-320q-41 0-102.5-8.5T259-356q-57-19-98-49.5T120-480v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-420Zm0 200q41 0 102.5-8.5T701-256q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-156q-57 19-118.5 27.5T480-120q-41 0-102.5-8.5T259-156q-57-19-98-49.5T120-280v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-220Z"/></svg>',
      title: "Databases",
      skills: [
        { icon: this.imageBasePath + "ic_firebase.webp", title: "Firebase" },
        { icon: this.imageBasePath + "ic_mysql.webp", title: "MySQL" },
        { icon: this.imageBasePath + "ic_sqlite.webp", title: "SQLite" }
      ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="M270-560h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-100h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm410 140v-240h40q33 0 56.5 23.5T800-680h80q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-80q0 33-23.5 56.5T720-520h-40ZM480-340H240v-100q-66 0-113-47T80-600v-80q0-66 47-113t113-47h320q33 0 56.5 23.5T640-760v240q0 33-23.5 56.5T560-440h-80v100ZM220-120q-25 0-42.5-17.5T160-180v-60q0-25 17.5-42.5T220-300h280q25 0 42.5 17.5T560-240v60q0 25-17.5 42.5T500-120H220Z"/></svg>',
      title: "Development Tools",
      skills: [
        { icon: this.imageBasePath + "ic_git.webp", title: "Git" },
        { icon: this.imageBasePath + "ic_github.webp", title: "Github" },
        { icon: this.imageBasePath + "ic_gradle.webp", title: "Gradle" },
        { icon: this.imageBasePath + "ic_npm.webp", title: "npm" },
      ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="M160-120q-33 0-56.5-23.5T80-200v-240q0-17 11.5-28.5T120-480q17 0 28.5 11.5T160-440v240h320q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120H160Zm160-160q-33 0-56.5-23.5T240-360v-240q0-17 11.5-28.5T280-640q17 0 28.5 11.5T320-600v240h320q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280H320Zm160-160q-33 0-56.5-23.5T400-520v-240q0-33 23.5-56.5T480-840h320q33 0 56.5 23.5T880-760v240q0 33-23.5 56.5T800-440H480Zm0-80h320v-160H480v160Z"/></svg>',
      title: "Integrated Development Environments (IDEs",
      skills: [
        { icon: this.imageBasePath + "ic_android_studio.webp", title: "Android Studio" },
        { icon: this.imageBasePath + "ic_intellij.webp", title: "IntelliJ IDEA" },
        { icon: this.imageBasePath + "ic_vs.webp", title: "VS Code" },
        { icon: this.imageBasePath + "ic_netbeans.webp", title: "Netbeans" },
        { icon: this.imageBasePath + "ic_nvim.webp", title: "Neovim" },
      ]
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 -960 960 960" width="23"><path fill="#ABB2BF" d="m352-522 86-87-56-57-16 16q-11 11-27.5 11.5T310-650q-12-12-12-28.5t12-28.5l15-15-45-45-87 87 159 158Zm328 329 87-87-45-45-16 15q-12 12-28 12t-28-12q-12-12-12-28t12-28l15-16-57-56-86 86 158 159Zm-31-510 56 56 56-56-57-57-55 57ZM160-120q-17 0-28.5-11.5T120-160v-113q0-8 3-15.5t9-13.5l163-163-173-173q-17-17-17-42t17-42l116-116q17-17 42-16.5t42 17.5l174 173 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l173 173q17 17 17 42t-17 42L722-122q-17 17-42 17t-42-17L465-295 302-132q-6 6-13.5 9t-15.5 3H160Z"/></svg>',
      title: "Design Tools",
      skills: [
        { icon: this.imageBasePath + "ic_figma.webp", title: "Figma" },
        { icon: this.imageBasePath + "ic_canva.webp", title: "Canva" },
        { icon: this.imageBasePath + "ic_blender.webp", title: "Blender" }
      ]
    }
  ];

  experince: ExperienceItem[] = [
    { companyName: "Freelancer", date: "December 2022 - Current", companyLogo: this.imageBasePath + "avatar.webp", description: "Over the past 2 years, I have worked as an independent developer for both Android and desktop applications. I have developed both extensive applications and smaller ones for specific individual clients. In these projects, I have used Kotlin, Java, and Jetpack Compose for project development, and I have also employed C++ for creating native libraries, along with other languages and libraries for building mobile and desktop applications." },
    { companyName: "Vico's Painting Concepts", date: "June 2022 - November 2022", companyLogo: this.imageBasePath + "vicos.webp", description: "I undertook key responsibilities as the manager of the company's website maintenance for a period of five months. During my tenure, I implemented rigorous testing to ensure the stability and functionality of the site, while simultaneously conducting continuous monitoring and code optimization to enhance the user experience. My commitment to quality and efficiency contributed to the optimal performance of the company's digital platform." },
    { companyName: "Vico's Painting Concepts", date: "March 2022 - June 2022", companyLogo: this.imageBasePath + "vicos.webp", description: "I developed a website designed to facilitate efficient and quick communication between users and the company for service requests. This web platform was built using HTML, CSS, Bootstrap, JavaScript, and Node.js, with MySQL as the database. I conducted thorough tests to ensure the stability and functionality of the site, ensuring that users can interact securely and efficiently." },
    { companyName: "SkyOne Group", date: "January 2022 - February 2022", companyLogo: this.imageBasePath + "skyOne.webp", description: "I carried out the migration of an application written in Java to Kotlin, enhancing its functionality by implementing a clean architecture along with a Model-View-ViewModel (MVVM) architecture to make the application more scalable. I ensured that all components worked correctly and complied with security standards. Additionally, I worked on code optimization to ensure optimal performance." },
    { companyName: "SkyOne Group", date: "November ,  e2021 - January 2022", companyLogo: this.imageBasePath + "skyOne.webp", description: "I developed a website for purchasing subscriptions for an entertainment application, using HTML, CSS, and JavaScript. I utilized the PayPal API as a secure, easy, and convenient payment method for users. I conducted thorough testing to ensure the stability and functionality of the website, enabling users to make their purchases quickly and securely. Additionally, I ensured that the website stayed up-to-date with the latest security and stability standards." }
  ];

  projects: ProjectItem[] = [
    { 
      image: this.imageBasePath + "deepCodeImage.webp", 
      logo: this.imageBasePath + "deepCodeLogo.webp", 
      title: "DeepCode Studio", 
      description: "As a reverse engineering student, while learning assembly language, I noticed the absence of a dedicated code editor for this language. Since I am accustomed to working with editors that facilitate code autocompletion, I decided to create my own editor that covers virtually any type of assembly language. This editor was developed using Kotlin and Jetpack Compose Multiplatform",
      githubLink: "https://github.com/Daniel0110000/DeepCodeStudio",
      downloadLink: "https://github.com/Daniel0110000/DeepCodeStudio/releases/tag/1.0.0" 
    },
    { 
      image: this.imageBasePath + "pingImage.webp", 
      logo: this.imageBasePath + "pingLogo.webp", 
      title: "Ping", 
      description: "This project was crucial for my understanding and proficiency in reactive programming on Android. The app facilitates easy messaging among users. It includes a login feature that allows users to sign in with their Google, Facebook, or email and password accounts. Additionally, it boasts an appealing user interface. For authentication and storage of sent messages and multimedia files, the application leverages Firebase",
      githubLink: "https://github.com/Daniel0110000/Ping",
      downloadLink: "https://github.com/Daniel0110000/Ping/releases/download/v1.0.0-alpha1/Ping.apk"
    },
    { 
      image: this.imageBasePath + "miauImage.webp", 
      logo: this.imageBasePath + "miauLogo.webp", 
      title: "Miau Mart", 
      description: "As a cat lover, I came up with the idea of creating an app to practice reactive programming and explore the use of Firebase for data storage. This project is an online store for cat products with a cart functionality and a section for making purchases. It was developed using Kotlin and important libraries for its operation",
      githubLink: "https://github.com/Daniel0110000/Miau-Mart",
      downloadLink: "https://github.com/Daniel0110000/Miau-Mart/blob/master/app/release/Miau%20Mart.apk" 
    },
    { 
      image: this.imageBasePath + "gameCatalogImage.webp", 
      logo: this.imageBasePath + "gameCatalogLogo.webp", 
      title: "Game Catalog",
      description: "This project represents one of my initial personal endeavors and played a pivotal role in my understanding of the data retrieval process through a video game API. Developed in Java, I utilized the Retrofit library for data extraction and implemented SQLite to locally store the list of favorite games",
      githubLink: "https://github.com/Daniel0110000/Game-Catalog",
      downloadLink: "https://github.com/Daniel0110000/Game-Catalog"  
    }
  ];

  selectedButtonIndex: number = 0;
  readonly email = "cariasdaniel261@gmail.com";

  constructor(
    private sanitizer: DomSanitizer
  ){}

  /**
   * Sanitize HTML icon and return as [SafeHtml]
   * @param icon The icon to sanitize
   * @returns Sanitized icon
   */
  getSafeHtml(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  /**
   * Set the selected button index if it's different from the current index
   * @param index The index to assign
   */
  setSelectedButtonIndex(index: number): void {
    if(index != this.selectedButtonIndex) this.selectedButtonIndex = index;
  }

  /**
   * Scroll to aspecific section on the page
   * @param sectionId The ID of the section to scroll to
   */
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start", inline: "nearest" })
    }

  }

  /**
   * Listener for window scroll events
   * @param event The scroll event
   */
  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    this.updateActiveSection();
  }

  /**
   * Updated the active button of the navigation bar based on the current scroll position
   */
  updateActiveSection() {
    const sections = ["aboutMeSection", "skillsSection", "experienceSection", "projectSection"];

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if(element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 80 && rect.bottom >= window.innerHeight / 2) {
          this.setSelectedButtonIndex(sections.indexOf(sectionId));
          break;
        }

      }
    }
  }


}
