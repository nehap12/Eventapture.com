/**
 * Created by anasrazafirdousi on 4/29/17.
 */
import {Component, Input, OnInit, ElementRef, EventEmitter, Output, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-snapshot-camera',
  templateUrl: './snapshot-camera.component.html',
  styleUrls: ['./snapshot-camera.component.css']
})
export class SnapshotCameraComponent implements OnInit, OnDestroy, OnChanges {

  video: HTMLVideoElement;

  canvas: HTMLCanvasElement;

  stream: MediaStream;

  pictures = [];

  @Input() width: number;

  @Input() height: number;

  @Input() openCamera: boolean;

  @Output() snapshot = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const elem = this.elementRef.nativeElement;

    this.video = <HTMLVideoElement>elem.querySelector('video');
    // this.canvas = <HTMLCanvasElement>elem.querySelector('canvas');

    // this.startSnapshot();
  }

  ngOnChanges() {
    if(this.openCamera){
      this.startSnapshot();
    }
  }

  ngOnDestroy() {
    this.stopSnapshot();
  }

  startSnapshot() {
    // const { video, canvas } = this;
    const { video } = this;

    // canvas.width = canvas.height = 0;

    // canvas.hidden = true;
    video.hidden = false;

    navigator.getUserMedia({
        audio: false,
        video: {
          width: this.width,
          height: this.height
        }
      },
      (stream: MediaStream) => {
        this.stream = stream;
        video.src = URL.createObjectURL(stream);
        video.onloadedmetadata = (e) => {
          video.play();
        };
      },
      (err: MediaStreamError) => {
        console.error(err);
      });
  }

  stopSnapshot() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    this.video.src = null;
    this.video.hidden = false;

    // this.canvas.hidden =
  }

  takeSnapshot() {
    // const { canvas, video, width, height } = this;
    const { video, width, height } = this;
    const { videoWidth, videoHeight } = video;

    const album = this.elementRef.nativeElement.querySelector('#snap-album');
    const picListItem = document.createElement('li');

    const canvas = document.createElement('canvas');
    // canvas.hidden = false;
    video.hidden = true;

    const scale = width / videoWidth;

    canvas.width = 200; // videoWidth * scale;
    canvas.height = 150; // videoHeight * scale;

    // canvas.onclick = () => this.startSnapshot();

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // this.pictures.push(canvas);
    picListItem.style.cssFloat = 'left'; // .setAttribute('class','picInAlbum');
    picListItem.style.marginTop = '5px';
    picListItem.style.marginRight = '10px';
    picListItem.style.marginBottom = '5px';
    picListItem.style.marginLeft = '10px';
    picListItem.appendChild(canvas);

    album.appendChild(picListItem);


    this.snapshot.emit({
      width: canvas.width,
      height: canvas.height,
      dataURL: canvas.toDataURL()
    });

    this.startSnapshot();
  }
}
