import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {  PathResolver } from '../shared/services/pathResolver.service';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  selector: 'stories',  // <home></home>
  providers: [ ],
  styleUrls: [ './stories.component.css' ],
  templateUrl: './stories.component.html'
})
export class StoriesComponent implements OnInit {

  // public storyImagePathTest = '/../../../assets/img/trump.jpg';

  headline: any;
  question: any;
  answers: any;
  videolist: any;

  public storyImage = 'trump.jpg';
  public storyImagePathTest = '';
  public mapUpdates = [];

  public openCameraRecording: boolean;
  public openVideoCameraRecording: boolean;

  constructor(
      public pathResolver: PathResolver,
      private route: ActivatedRoute,
      private http: Http
  ) {
      this.storyImagePathTest = pathResolver.resolvePath(this.storyImage, 'image');
      this.openCameraRecording = false;
  }

  public ngOnInit() {
    console.log('hello `Stories` component');
    this.route.params.subscribe((params) => {
      console.log('Stories page for Story ID:',params);
    });

    this.headline = this.storyData[0].title;
    this.question = this.storyData[0].title;
    this.answers = this.storyData[0].answers;
    this.question = this.storyData[0].question;
    this.videolist = this.storyData[0].videos;

    console.log("WTF " ,this.storyData[0].videos);

  }

  openCamera(){
    this.openCameraRecording = true;
  }

  closeCamera(){
    this.openCameraRecording = false;
  }

  openVideoCamera(){
    this.openVideoCameraRecording = true;
  }

  closeVideoCamera(){
    this.openVideoCameraRecording = false;
  }

  storyData = [
      {
            "_id" : "590a32b44c26a2ba5d8dc336",
            "title" : "Trump responds to Clinton with late-night tweets",
            "category" : {
              "id" : "Politics",
              "name" : "Politics"
            },
            "coverImage" : "http://i2.cdn.cnn.com/cnnnext/dam/assets/160302005451-trump-and-hillary-exlarge-169.jpg",
            "shortDescription" : "President Donald Trump, in a series of late night tweets on Tuesday, both revisited his 2016 victory over Hillary Clinton and seemingly slammed the judgment of his own FBI director.",
            "longDescription" : "\"FBI Director Comey was the best thing that ever happened to Hillary Clinton in that he gave her a free pass for many bad deeds! The phony Trump/Russia story was an excuse used by the Democrats as justification for losing the election. Perhaps Trump just ran a great campaign,\" Trump wrote in a series of messages. The tweets come after Clinton blamed her flawed candidacy, Russia's intervention in the election via WikiLeaks and a letter released by FBI Director James Comey for her 2016 election loss during an interview with CNN's Christiane Amanpour at a Women for Women International event in New York. Comey will appear before a Senate committee Wednesday, where he'll face questions on Russian interference in the US election and why he decided to announce that the FBI was looking again at Clinton's emails just days before the election. Hours before Trump tweeted, Clinton welcomed the President's ire after Amanpour predicted that the Twitter-focused President would respond to his former opponent. \"Fine. Better than the interfering in foreign affairs,\" Clinton said of the prospect Trump would tweet about her. \"If he wants to tweet about me then I am happy to be the diversion because we have lot of things to worry about.\" She added: \"He should worry less about the election and my winning the popular vote than doing some other things that would be important for the country.\" The event was the latest in which Clinton, in a stinging rebuke to Trump, blamed herself for the 2016 loss but also cast the current President as someone aided by outside factors, including the Russian government. Clinton's comments about Trump were so direct that it almost seemed a response from Trump was all but certain.",
            "region" : {
              "continent" : [
               "North America"
              ],
              "country" : [
                "USA"
              ],
              "state" : [],
              "city" : []
            },
            "source" : {
              // "author" : ObjectId("589fa7a9598cd25454fc24df"),
              // "agency" : ObjectId("589fa72a598cd25454fc24d8")
            },
            "tag" : {
              "storyTag" : [
                "Twitter",
                "Late Night",
                "Trump-Hillary"
              ],
              "personalityTag" : [
                "Hillary Clinton",
                "Donald Trump ",
                "James Comey"
              ],
              "eventTag" : [
                "Late Night",
                "Tweets"
              ]
            },
            "counter" : {
              "impression" : 7645,
              "share" : 123,
              "textComment" : 5,
              "audioComment" : 0,
              "videoComment" : 1,
              "reaction" : {
                "like" : 235,
                "dislike" : 23,
                "hate" : 23,
                "love" : 3,
                "sad" : 23,
                "happy" : 2234,
                "funny" : 10
              },
              "hide" : 0,
              "report" : 0
            },
            "flags" : {
              "isTop" : true,
              "isTrending" : true
            },
            // "vote" : ObjectId("590a5025de0e47ecb83075c4"),
            // "publication_date" : ISODate("2017-05-03T09:02:24.000Z"),
            "pictures" : [
              "http://i2.cdn.cnn.com/cnnnext/dam/assets/160302005451-trump-and-hillary-exlarge-169.jpg",
              "https://www.commondreams.org/sites/default/files/headlines/clinton_trump.jpg",
              "http://cbsnews2.cbsistatic.com/hub/i/r/2016/10/20/20a210da-aaf4-4a15-8293-b344562c3b87/thumbnail/620x350/82fc5bf12e250468f7c0bd70e7fdf58a/trump-clinton-split.jpg",
              "http://liberalvaluesblog.com/wp-content/uploads/2016/09/Trump-Clinton-Wedding.png"
            ],
            "videos" : [
              "https://www.youtube.com/watch?v=7-DWFslQlXU",
              "https://www.youtube.com/watch?v=nATSjEeDCnM",
              "https://www.youtube.com/watch?v=lVmPgAFvcAk",
              "https://www.youtube.com/watch?v=xfmYqjN6Jh4",
              "https://www.youtube.com/watch?v=iGEIto1UJAI"
            ],
            "audios" : [],
            "documents" : [],
            "state" : 0,
            "isCommunityStory" : false,
            "communityID" : "",
            "realatedStories" : [
              // ObjectId("590a33554c26a2ba5d8dc337"),
              // ObjectId("590a30ee4c26a2ba5d8dc335"),
              // ObjectId("590a35b04c26a2ba5d8dc338")
            ],
            "question" : "Should Trump respond through tweets on important issues?",
            "answers" : [
              {
                "answer" : "Yes, Definitely!",
                "count" : 12,
                "state" : 0
              },
              {
                "answer" : "No",
                "count" : 24,
                "state" : 1
              },
              {
                "answer" : "Yeah, maybe",
                "count" : 45,
                "state" : 1
              },
              {
                "answer" : "Not at all",
                "count" : 88,
                "state" : 1
              }
            ]
      }
  ];

}
