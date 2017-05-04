import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppState } from '../app.service';
import {  PathResolver } from '../shared/services/pathResolver.service';
import 'rxjs/Rx';
import * as d3 from 'd3';


@Component({
  selector: 'section-home',  // <section-home></section-home>
  providers: [],
  styleUrls: [ './section-home.component.css' ],
  templateUrl: './section-home.component.html'
})
export class SectionHomeComponent implements OnInit {

  private parentNativeElement: any;


  public storyImage = 'trump.jpg';
  public storyImagePathTest = '';

  // TypeScript public modifiers
  constructor(
    private route: ActivatedRoute,
    public appState: AppState,
    public pathResolver: PathResolver,
    public http: Http
  ) {
        this.storyImagePathTest = pathResolver.resolvePath(this.storyImage, 'image');
  }

  public ngOnInit() {
    console.log('hello `Section` component');
    // this.title.getData().subscribe(data => this.data = data);
    this.route.params.subscribe((params) => {
      console.log('Section page for:',params);
    });


  }

  stories = [
    {
      "imageURL":"http://i2.cdn.turner.com/money/dam/assets/151103145753-jimmy-kimmel-beard-2-780x439.jpg",
      "headline":"Conservatives lash out at Jimmy Kimmel for health care plea",
      "upward":24.23,
      "downward":34.22,
      "category": "Politics",
      "personalityTag": ["Jimmy Kimmel",
        "Donald Trump ",
        "Joe Walsh"]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170503095824-bannon-whiteboard-2-exlarge-169.jpg",
      "headline":"Steve Bannon's White House whiteboard revealed",
      "upward":55.11,
      "downward":29.20,
      "category": "Politics",
      "personalityTag": ["Steve Bannon",
        "Donald Trump ",
        "Maeve Reston",
        "Rabbi Shmuley Boteach"]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170418163834-michelle-obama-farewell-address-exlarge-169.jpg",
      "headline":"Obamas donating $2 million to South Side summer jobs program",
      "upward":46.55,
      "downward":13.98,
      "category": "Politics",
      "personalityTag": ["Barack Obama",
        "Michelle Obama",
        "Rahm Emanuel"]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170502140354-hillary-clinton-may-2-2017-02-medium-plus-169.jpg",
      "headline":"How Hillary Clinton's attacks are helping President Trump",
      "upward":19.17,
      "downward":65.98,
      "category": "Politics",
      "personalityTag": ["Hillary Clinton",
        "Donald Trump ",
        "James Comey"]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/160302005451-trump-and-hillary-exlarge-169.jpg",
      "headline":"Trump responds to Clinton with late-night tweets",
      "upward":32.55,
      "downward":74.22,
      "category": "Politics",
      "personalityTag": ["Hillary Clinton",
        "Donald Trump ",
        "James Comey"]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170130185040-03-sally-yates-file-medium-plus-169.jpg",
      "headline":"Spy behind Trump dossier says info was never meant for public eyes",
      "upward":66.14,
      "downward":43.10,
      "category": "Politics",
      "personalityTag": ["Obama",
        "Donald Trump ",
        "Scott Pruitt"]
    },
    {
      "imageURL":"http://thehill.com/sites/default/files/article_images/jamescomey_070815fr.jpg",
      "headline":"Comey hearing: FBI chief defends 'right choice' on handling Clinton email probe",
      "upward":39.76,
      "downward":9.65,
      "category": "Politics",
      "personalityTag": ["James Comey",
        "Donald Trump",
        "Hillary Clinton"]
    },
    {
      "imageURL":"https://i.ytimg.com/vi/4r1EmEni2Rw/maxresdefault.jpg",
      "headline":"Trump vows to work as 'mediator' for Israeli-Palestinian peace",
      "upward":33.15,
      "downward":65.32,
      "category": "Politics",
      "personalityTag": ["Donald Trump"]
    },
    {
      "imageURL":"http://s7d2.scene7.com/is/image/TWCNews/texas-capitol-360jpg?wid=640&fmt=png-alpha&",
      "headline":"Key GOP lawmakers flip on health care after Trump meeting",
      "upward":13.89,
      "downward":67.20,
      "category": "Politics",
      "personalityTag": ["Fred Upton","Donald Trump ","Billy Long"]
    },
    {
      "imageURL":"https://media4.s-nbcnews.com/j/newscms/2017_16/1971271/170420-jaguar-usfws-arizona-ew-1211p_81d352b61d589ac134408fe9fb62410c.nbcnews-ux-320-320.jpg",
      "headline":"Trump’s Border Wall ‘Catastrophic’ for Environment, Endangered Species: Activists",
      "upward":21.56,
      "downward":76.22,
      "category": "Politics",
      "personalityTag": ["Donald Trump",
        "Bob Dreher"]
    },
    {
      "imageURL":"https://media4.s-nbcnews.com/j/newscms/2017_16/1972711/170421-dow-chemical-1221p-rs_ad96b03abd07eb77348172df4ab8d587.nbcnews-ux-320-320.jpg",
      "headline":"Dow Chemical Pushes White House to Kill Risk Study Showing Pesticide Dangers",
      "upward":56.12,
      "downward":7.92,
      "category": "Politics",
      "personalityTag": ["Donald Trump",
        "Scott Pruitt "]
    },
    {
      "imageURL":"http://i2.cdn.cnn.com/cnnnext/dam/assets/140105053223-us-congress-beauty-shot-medium-plus-169.jpg",
      "headline":"Trump to meet with key Republicans opposed to health care bill",
      "upward":23.99,
      "downward":67.21,
      "category": "Politics",
      "personalityTag": ["Obama",
        "Donald Trump",
        "Billy Long",
        "Fred Upton"]
    },
    {
      "imageURL":"http://a57.foxnews.com/www.foxnews.com/images/root_images/397/0/trump397_20170228_152646.jpg",
      "headline":"Trump tasked with easing GOP tensions in primetime address",
      "upward":45.12,
      "downward":81.1,
      "category": "Politics",
      "personalityTag": ["Mark Meadows",
        "Donald Trump",
        "Paul Ryan",
        "Mitch McConnell"]
    },
    {
      "imageURL":"http://a57.foxnews.com/images.foxnews.com/content/fox-business/politics/2017/02/24/trump-attacks-fbi-on-leakers-russia-reports-find-now/_jcr_content/par/featured-media/media-0.img.jpg/932/470/1487944563789.jpg?ve=1&tl=1",
      "headline":"Trump speech likely to run over an hour, still being finished",
      "upward":4.67,
      "downward":67.40,
      "category": "Politics",
      "personalityTag": ["Sean Spicer",
        "Donald Trump",
        "Mike Dubke"]
    },
    {
      "imageURL":"http://i.huffpost.com/gen/3133650/images/o-FOX-FRIENDS-TRUMP-facebook.jpg",
      "headline":"Trump: Obama and former aides behind protests, leaks",
      "upward":72.16,
      "downward":25.09,
      "category": "Politics",
      "personalityTag": ["Barack Obama",
        "Donald Trump",
        "Shawn Turner",
        "Ben Rhodes"]
    },

  ];



}
