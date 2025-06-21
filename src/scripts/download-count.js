      (async () => {
        const countElement = document.getElementById('download-count-number'); // This ID will be added in the next step
        const defaultCountText = '0'; // Fallback text

        if (!countElement) {
          console.error('Download count element not found');
          return;
        }

        try {
          const response = await fetch('https://api.github.com/repos/Dansware03/appvida987oficial/releases/latest');
          if (!response.ok) {
            throw new Error(`GitHub API request failed: ${response.status}`);
          }
          const data = await response.json();

          const assetName = 'Vida-98.7-FM-App.apk';
          const targetAsset = data.assets.find(asset => asset.name === assetName);

          if (targetAsset) {
            // Format the number with commas for readability if it's large
            const downloadCount = targetAsset.download_count;
            countElement.textContent = downloadCount.toLocaleString();
          } else {
            console.warn(`Asset ${assetName} not found in the latest release.`);
            countElement.textContent = defaultCountText; // Or 'N/A' or some other placeholder
          }
        } catch (error) {
          console.error('Failed to fetch or process download count:', error);
          countElement.textContent = defaultCountText; // Fallback on error
        }
      })();
