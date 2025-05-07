describe('Button Press Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        // await device.reloadReactNative();
    });

    it('should find and tap the Continue button', async () => {
        // Wait for the Continue button to be visible
        await waitFor(element(by.id('continue_button')))
            .toBeVisible()
            .withTimeout(15000); // Increased timeout for CI

        // Tap the Continue button
        await element(by.id('continue_button')).tap();

        // Verify confirmation text
        await expect(element(by.id('confirmation_text'))).toBeVisible();
    });
});
