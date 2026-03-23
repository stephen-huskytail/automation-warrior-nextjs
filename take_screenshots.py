from sdk.utils.browser import get_browser, close_browser
import asyncio

SECTIONS = ["hero", "approach", "results", "services", "comparison", "process", "team", "footer"]

async def take_site_screenshots(url: str, prefix: str):
    browser = await get_browser(f"aw-{prefix}", viewport_width=1440, viewport_height=900)
    await browser.goto(url)
    await browser.page.wait_for_timeout(4000)

    out_dir = "/work/screenshots/automation-warrior"

    # Hero - top of page
    await browser.page.evaluate("window.scrollTo(0, 0)")
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-hero.png")
    print(f"  ✓ {prefix}-hero.png")

    # Approach
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-approach.png")
    print(f"  ✓ {prefix}-approach.png")

    # Results
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-results.png")
    print(f"  ✓ {prefix}-results.png")

    # Services
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-services.png")
    print(f"  ✓ {prefix}-services.png")

    # Comparison
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-comparison.png")
    print(f"  ✓ {prefix}-comparison.png")

    # Process
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-process.png")
    print(f"  ✓ {prefix}-process.png")

    # Team
    await browser.scroll("down", 5)
    await browser.page.wait_for_timeout(1000)
    await browser.take_screenshot(f"{out_dir}/{prefix}-team.png")
    print(f"  ✓ {prefix}-team.png")

    # Footer - scroll to bottom
    await browser.page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await browser.page.wait_for_timeout(1500)
    await browser.take_screenshot(f"{out_dir}/{prefix}-footer.png")
    print(f"  ✓ {prefix}-footer.png")

    await close_browser(f"aw-{prefix}")

async def main():
    print("📸 Taking screenshots of LIVE site...")
    await take_site_screenshots("https://www.automationwarrior.ai/", "live")

    print("\n📸 Taking screenshots of STAGING site...")
    await take_site_screenshots("https://automation-warrior-nextjs.vercel.app/", "staging")

    print("\n✅ All screenshots saved to /work/screenshots/automation-warrior/")

asyncio.run(main())
