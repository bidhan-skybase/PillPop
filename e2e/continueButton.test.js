describe('Button Press Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should find and tap the Continue button', async () => {
        await expect(element(by.id('continue_button'))).toBeVisible();
        await element(by.id('continue_button')).tap();
        await expect(element(by.id('confirmation_text'))).toBeVisible();
    });
});
