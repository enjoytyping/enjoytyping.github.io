import './feedback-form.scss';
import { BaseHtmlComponent } from '../_core/base-component';
import { LabeledInputHtmlComponent } from '../_core/input/labeled-input.component';
import { CLOSE_FEEDBACK_FORM_EVENT, OPEN_FEEDBACK_FORM_EVENT } from '../../constants/constant';
import { LabeledTextAreaHtmlComponent } from '../_core/textarea/labeled-textarea.component';
import { ButtonHtmlComponent, ButtonStyle } from '../_core/button/button.component';
import { ToastClient } from '../../services/toast/toast.service';

export class FeedbackFormHtmlComponent extends BaseHtmlComponent {
  private feedbackIconId: string;
  private feedbackIcon: HTMLElement;
  private feedbackFormContainerId: string;
  private feedbackFormContainer: HTMLElement;
  private feedbackFormId: string;
  private feedbackForm: HTMLFormElement;
  private feedbackFormBackgroundId: string;
  private feedbackFormBackground: HTMLElement;
  private emailInput: LabeledInputHtmlComponent = new LabeledInputHtmlComponent('Email', '', true, 100);
  private messageInput: LabeledTextAreaHtmlComponent = new LabeledTextAreaHtmlComponent('Message', '', true, 500, '100%', '25rem');
  private submitButton: ButtonHtmlComponent = new ButtonHtmlComponent('Submit', ButtonStyle.PRIMARY, 'submit');
  private cancelButton: ButtonHtmlComponent = new ButtonHtmlComponent('Cancel', ButtonStyle.SECONDARY);
  private httpClient = new XMLHttpRequest();
  private toastClient = ToastClient.getInstance();

  preInsertHtml(): void {
    this.feedbackIconId = this.generateId();
    this.feedbackFormContainerId = this.generateId();
    this.feedbackFormId = this.generateId();
    this.feedbackFormBackgroundId = this.generateId();
    this.emailInput.preInsertHtml();
    this.messageInput.preInsertHtml();
    this.submitButton.preInsertHtml();
    this.cancelButton.preInsertHtml();
  }

  toHtml() {
    return /* html */ `
      <span id="${this.feedbackIconId}" class="feedback-icon-container">
        <span class="feedback-label">Your feedback help us a lot :)</span>
        <span class="iconify" data-icon="jam:message"></span>
      </span>
      <div id="${this.feedbackFormContainerId}" class="feedback-form-container">
        <form id="${this.feedbackFormId}" class="feedback-form">
          <div class="feedback-form-inputs">
            <h2 class="feedback-form-title">Your feedback</h2>
            <div class="email-input">${this.emailInput.toHtml()}</div>
            <div class="message-input">${this.messageInput.toHtml()}</div>
          </div>
          <div class="feedback-form-buttons">
            ${this.cancelButton.toHtml()}
            ${this.submitButton.toHtml()}
          </div>
        </form>
        <div id="${this.feedbackFormBackgroundId}" class="feedback-form-background">
        </div>
      </div>
    `;
  }

  postInsertHtml(): void {
    this.emailInput.postInsertHtml();
    this.emailInput.focus();
    this.messageInput.postInsertHtml();
    this.submitButton.postInsertHtml();
    this.cancelButton.postInsertHtml();
    this.feedbackIcon = document.getElementById(this.feedbackIconId);
    this.feedbackFormContainer = document.getElementById(this.feedbackFormContainerId);
    this.feedbackFormBackground = document.getElementById(this.feedbackFormBackgroundId);
    this.feedbackForm = document.getElementById(this.feedbackFormId) as HTMLFormElement;
    this.feedbackIcon.addEventListener('click', this.handleFeedbackIconClickEvent.bind(this));
    this.feedbackFormBackground.addEventListener('click', this.handleFeedbackFormBackgroundClickEvent.bind(this));
    this.feedbackForm.addEventListener('click', this.handleFeedbackFormClickEvent.bind(this));
    this.cancelButton.onClick(this.handleCancelButtonClickEvent.bind(this));
    this.submitButton.onClick(this.handleSubmitButtonClickEvent.bind(this));
  }

  private handleSubmitButtonClickEvent() {
    if (this.emailInput.isNotValid() || this.messageInput.isNotValid()) {
      return;
    }
    const body = {
      email: this.emailInput.getValue(),
      message: this.messageInput.getValue(),
    };
    this.httpClient.open('POST', 'https://app.99inbound.com/api/e/JeIE6Bmh', true);
    this.httpClient.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    this.httpClient.send(JSON.stringify(body));
    this.closeForm();
    this.showToastThanksMessageWithDelay(500);
    this.showFeedbackIconWithDelay(5000);
  }

  private handleCancelButtonClickEvent() {
    this.closeForm();
  }

  private handleFeedbackIconClickEvent() {
    this.openForm();
    this.hideFeedbackIcon();
  }

  private handleFeedbackFormBackgroundClickEvent() {
    this.closeForm();
    this.showFeedbackIconWithDelay(0);
  }

  private handleFeedbackFormClickEvent(event) {
    event.stopPropagation();
  }

  private closeForm() {
    this.feedbackFormContainer.classList.remove('active');
    this.feedbackForm.reset();
    this.dispatchCustomEvent(CLOSE_FEEDBACK_FORM_EVENT);
  }

  private openForm() {
    this.feedbackFormContainer.classList.add('active');
    this.dispatchCustomEvent(OPEN_FEEDBACK_FORM_EVENT);
  }

  private hideFeedbackIcon() {
    this.feedbackIcon.classList.add('hide');
  }

  private showFeedbackIconWithDelay(delay: number) {
    setTimeout(() => this.feedbackIcon.classList.remove('hide'), delay);
  }

  private showToastThanksMessageWithDelay(delay: number) {
    setTimeout(() => this.toastClient.show('Thank you for your feedback!'), delay);
  }
}
