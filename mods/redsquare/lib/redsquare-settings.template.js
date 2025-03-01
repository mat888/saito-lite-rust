module.exports = (app, mod) => {

	//let current_source = app.options.redsquare?.distributed;


	let html = `
			<div class="saito-module-settings">
			<fieldset class="saito-grid">
			<legend class="settings-label">RedSquare Feed</legend>
			<input type="radio" id="named" name="redsquare-curation" value="named" ${mod.curationLevel == "named" ? "checked" : ""}/>
			<label for="named">Named users <span class="note">(Filter anonymous accounts)</span></label>
			<input type="radio" id="following" name="redsquare-curation" value="following" ${mod.curationLevel == "following" ? "checked" :""}/>
			<label for="following">Following <span class="note">(Only load tweets from peers I follow)</span></label>
			</fieldset>
			<fieldset class="saito-grid">
			<input type="checkbox" id="browser_service" ${app.options.redsquare?.offer_service? "checked":""}/>
			<label for="browser_service">Share tweets with followers <span class="note">(Turn my browser into a relay server for Redsquare)</span></label>
			</fieldset>
			`;


	html += "</div>";

	return html;
}

/*
			<fieldset class="saito-grid">
			<legend class="settings-label">RedSquare Feed</legend>
			<input type="radio" id="central" name="redsquare-source" value="central" ${current_source ? "" : "checked"}/>
			<label for="central">For You <span class="note">(Original feed of all tweets)</span></label>
			<input type="radio" id="distributed" name="redsquare-source" value="distributed" ${current_source ? "checked" :""}/>
			<label for="distributed">Following <span class="note">(Only load tweets from peers I follow)</span></label>
			</fieldset>
*/