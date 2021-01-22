import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss']
})
export class RatingModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() buttonSubmitClickEvent = new EventEmitter();
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


  buttonSubmitClick() {
    this.buttonSubmitClickEvent.emit();
  }

  close() {
    this.activeModal.close();
  }
}
