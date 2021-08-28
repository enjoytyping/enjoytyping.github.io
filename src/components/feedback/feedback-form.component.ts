import './feedback.scss';
import { LabeledInputHtmlComponent } from '../_core/input/labeled-input.component';
import { LabeledTextAreaHtmlComponent } from '../_core/textarea/labeled-textarea.component';
import { ButtonHtmlComponent, ButtonStyle } from '../_core/button/button.component';
import { ToastClient } from '../../services/toast/toast.service';
import { BaseSidePanelHtmlComponent } from '../_core/side-panel/side-panel.component';

export class FeedbackFormHtmlComponent extends BaseSidePanelHtmlComponent {
  private emailInput: LabeledInputHtmlComponent = new LabeledInputHtmlComponent('Email', '', true, 100);
  private messageInput: LabeledTextAreaHtmlComponent = new LabeledTextAreaHtmlComponent('Message', '', true, 500, '100%', '25rem');
  private submitButton: ButtonHtmlComponent = new ButtonHtmlComponent('Submit', ButtonStyle.PRIMARY, 'submit');
  private cancelButton: ButtonHtmlComponent = new ButtonHtmlComponent('Cancel', ButtonStyle.SECONDARY);
  private httpClient = new XMLHttpRequest();
  private toastClient = ToastClient.getInstance();

  getTitle(): string {
    return 'Your feedback';
  }

  getBody(): string {
    return /* html */ `
      <form class="feedback-form">
        <div class="feedback-form-inputs">
          <div class="email-input">${this.emailInput.toHtml()}</div>
          <div class="message-input">${this.messageInput.toHtml()}</div>
        </div>
        <div class="feedback-form-buttons">
          ${this.cancelButton.toHtml()}
          ${this.submitButton.toHtml()}
        </div>
      </form>
    `;
  }

  preInsertHtml(): void {
    super.preInsertHtml();
    this.emailInput.preInsertHtml();
    this.messageInput.preInsertHtml();
    this.submitButton.preInsertHtml();
    this.cancelButton.preInsertHtml();
  }

  postInsertHtml(): void {
    super.postInsertHtml();
    this.emailInput.postInsertHtml();
    this.emailInput.focus();
    this.messageInput.postInsertHtml();
    this.submitButton.postInsertHtml();
    this.cancelButton.postInsertHtml();
    this.cancelButton.onClick(this.close.bind(this));
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
    // this.httpClient.open('POST', 'https://app.99inbound.com/api/e/JeIE6Bmh', true);
    // this.httpClient.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // this.httpClient.send(JSON.stringify(body));
    this.close();
    setTimeout(() => this.toastClient.show('Thank you for your feedback!'), 500);
  }
}
