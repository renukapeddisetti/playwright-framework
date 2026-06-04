export class VideoConsult {
    constructor(page) {
        this.page = page;
        this.videoConsultLink = page.locator("//a[@aria-label='Instant Video Consultation']");
        this.consultnowButton = page.locator("div[class='content'] a[class='link primary-button cta']");
        this.symptomsInput = page.locator('#detailed-description');
        this.continueButton = page.locator('.continue-btn-container.padder-top');
    }

    async gotoVideoConsult() {
        await this.page.goto('https://www.practo.com/');
        await this.videoConsultLink.click();
    }

    async bookConsultation(symptoms) {
        await this.consultnowButton.click();
        await this.symptomsInput.fill(symptoms);
        await this.continueButton.click();
    }}


