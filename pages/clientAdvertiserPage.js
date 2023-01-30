const {BasePage} = require("./basePage");
const {I, accounts} = inject();

class ClientAdvertiserPage extends BasePage {
    selectors = {
        addAssetsModal: '//div[@class="fade modal show"]//descendant::h5[text()="Add asset "]',
        buttons: {
            campaignsButton: '//span[text()="Campaigns"]',
            mediaLibraryButton: '//span[text()="Media Library"]',
            collaboratorsButton: '//span[text()="Collaborators"]',
            plusCreateNewCampaignButton: '//span[@class="mdi mdi-plus"]//ancestor::a[@class="data-empty-container"]',
            createNewCampaignButton: '//div[@class="data-empty-container"]//descendant::a[text()="Create new campaign"]',
            uploadNewAssetButton: '//button[text()="Upload new asset"]',
            uploadAssetsButton: '//a[text()="Upload assets"]',
            shareButton: '//button[text()="Share"]',
            addNewCollaboratorButton: '//a[text()="Add new collaborator"]',
            attachUploadAssetsButton: '//input[@name="_fileinput_advertiser-assets[]"]'
        }
    }

    clickMediaLibraryButton() {
        I.scrollTo(this.selectors.buttons.mediaLibraryButton);
        I.moveCursorTo(this.selectors.buttons.mediaLibraryButton);
        I.click(this.selectors.buttons.mediaLibraryButton)
        I.see("Upload new asset");
    }

    clickNewAssetButton() {
        I.scrollTo(this.selectors.buttons.uploadNewAssetButton);
        I.moveCursorTo(this.selectors.buttons.uploadNewAssetButton);
        I.click(this.selectors.buttons.uploadNewAssetButton);
        I.seeElement(this.selectors.addAssetsModal);
    }

    attachAndUploadAssets() {
        I.scrollTo(this.selectors.buttons.attachUploadAssetsButton);
        I.moveCursorTo(this.selectors.buttons.attachUploadAssetsButton);
        I.attachFile(this.selectors.buttons.attachUploadAssetsButton, 'data/1.jpg');
        I.wait(3);
        I.attachFile(this.selectors.buttons.attachUploadAssetsButton, 'data/2.jpg');
        I.wait(3);
        I.attachFile(this.selectors.buttons.attachUploadAssetsButton, 'data/3.png');
        I.wait(3);
        I.attachFile(this.selectors.buttons.attachUploadAssetsButton, 'data/4.jpg');
        I.wait(3);
        I.attachFile(this.selectors.buttons.attachUploadAssetsButton, 'data/5.jpg');
    }
}


module.exports = new ClientAdvertiserPage;
module.exports.ClientAdvertiserPage = ClientAdvertiserPage;