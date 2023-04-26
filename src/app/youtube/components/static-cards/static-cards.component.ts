import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/state.models';

@Component({
  selector: 'app-static-cards',
  templateUrl: './static-cards.component.html',
  styleUrls: ['./static-cards.component.scss'],
})
export class StaticCardsComponent {

  cardsToRender = [{
    id: 'k5E2AVpwsko',
    snippet: {
      publishedAt: '2017-09-05T16:48:15Z',
      title: 'Angular Tutorial for Beginners: Learn Angular & TypeScript',
      description: 'Angular tutorial for beginners: Learn Angular & TypeScript from scratch. \n🙏 Enjoyed this video? Please vote for me as the Top Programming Guru: https://bit.ly/2G7tf2s\n🔥 Get my complete Angular course (60% OFF - LIMITED TIME): https://bit.ly/367j4nB\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
          width: 320,
          height: 180,
        },
      },
    },
    statistics: {
      viewCount: '3833150',
      likeCount: '56284',
      favoriteCount: '0',
      commentCount: '2235',
    },
    contentDetails: {
      duration: '02:02:42',
    },
  },
  { id: 'nQ2A30cD3Q8',
    snippet: {
      publishedAt: '2023-04-12T17:18:25Z',
      title: 'Angular is back with a vengeance',
      description: 'Angular is adding a new feature called signals that will give it a reactive primitive similar to Vue.js and Solid. Learn how it compares to other popular JavaScript frameworks like React.js and Svelte. \n\n#javascript #programming #TheCodeReport\n\n💬 Chat with Me on Discord\n\nhttps://discord.gg/fireship\n\n🔗 Resources\n\nAngular Signals Demo https://angular-signals.netlify.app\nRFC https://github.com/angular/angular/discussions/49685\nIn Depth Change Detection https://indepth.dev/posts/1510/rendering-cycle-in-angular-applications-browser-angular-and-zone-js-interaction\nAngular in 100 Seconds https://youtu.be/Ata9cSC2WpM\n\n🔥 Get More Content - Upgrade to PRO\n\nUpgrade at https://fireship.io/pro\nUse code YT25 for 25% off PRO access \n\n🎨 My Editor Settings\n\n- Atom One Dark \n- vscode-icons\n- Fira Code Font\n\n🔖 Topics Covered\n\n- Angular Signals tutorial\n- Is Angular dead?\n- History of JavaScript frameworks \n- Cool new JavaScript features\n- Will Angular signals replace RxJS?\n- Reactive programming on the web',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/nQ2A30cD3Q8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
      },
    },
    statistics: {
      viewCount: '398373',
      likeCount: '21587',
      favoriteCount: '0',
      commentCount: '1629',
    },
    contentDetails: {
      duration: '00:03:48',
    },
  },
  { id: '3dHNOWTI7H8',
    snippet: {
      publishedAt: '2021-05-06T15:40:03Z',
      title: 'Angular Crash Course',
      description: 'Learn the fundamentals of Angular in this project-based crash course\n\nVideo Sponsor:\nhttps://www.hostinger.com/traversymedia\n- Use the code TRAVERSYMEDIA for 10% off!\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-2021\n\nLatest Udemy Courses:\nhttps://traversymedia.com​\n\n💖  Support The Channel!\nhttp://www.patreon.com/traversymedia\n\nTimestamps:\n0:00 - Hostinger Sponsor\n0:35 - Intro & Slides\n7:41 - Angular CLI & Setup\n10:39 - Files & Folders\n14:49 - Component structure\n16:42 - Properties & Interpolation\n18:40 - Global Styles\n19:20 - Header Component\n23:15 - Button Component\n24:36 - Component Input Data\n22:19 - Creating an event & event emitter output\n30:51 - Mock Tasks & Task Interface\n34:10 - Tasks Component\n36:03 - Looping with ngFor\n37:16 - Task Item Component\n40:13 - Angular Font Awesome Setup\n44:39 - Create a Task Service\n49:06 - Creating and Subscribe to Observable\n50:04 - JSON-Server Setup\n57:29 - Angular HTTP Client\n59:48 - Fetching Tasks\n1:02:59 - Deleting Tasks\n1:12:54 - Toggle Reminder\n1:20:29 - Add Task Component\n1:26:26 - Forms Module & ngModel\n1:29:00 - Submit & Create Task\n1:37:02 - Toggle Button & UI Service\n1:51:38 - Angular Router\n1:57:34 - Limit Component to Route',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/3dHNOWTI7H8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
      },
    },
    statistics: {
      viewCount: '1164015',
      likeCount: '19069',
      favoriteCount: '0',
      commentCount: '1314',
    },
    contentDetails: {
      duration: '02:01:32',
    },
  },
  ];

  constructor(
    public dashboardService: DashboardService,
    private store: Store<AppState>,
  ) {}
}

