import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationButtonItem } from './NavigationButtonItem';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss", "./app.navigationBar.scss"]
})
export class AppComponent {

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

  selectedButtonIndex: number = 0;

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
