console.log('index-app.js loaded');




const handleActionsClick = async () =>
{
	try
	{
		console.log("Adding multiple actions");

		const actionsToAddJSON = await document.getElementById('actions-textarea').value;

		console.log(await actionsToAddJSON);

		const actionsToAdd = await JSON.parse(actionsToAddJSON);

		console.log(await actionsToAdd);

		//OK now we have the actions we want to add, in the object actionsToAdd, so we can go about adding them:

		let totalActionsAdded = 0;

		let finished = false;

		actionsToAdd.forEach(async (action, index) =>
		{
			try
			{
				console.log("Trying to add action: " + action.action);
				//run a POST request to add the action:
				let response = await fetch('/actions', {
					method: 'POST',
					body: JSON.stringify(action),
					headers:
				    {"Content-Type": "application/json",}
				});

				response = await response.json();

				if (await response.success)
				{
					totalActionsAdded++;
					//console.log("Posted an action");
					if (totalActionsAdded == actionsToAdd.length)
					{
						console.log("Done!");
						alert("Posted " + totalActionsAdded + " actions");
					}
					console.log(index);
					console.log(totalActionsAdded);
				}
				else
				{
					throw("Failed to POST action: " + action.action);
				}
			}
			catch(err2)
			{
				alert(err2);
				console.log(err2);
			}
		});
	}
	catch(err)
	{
		alert(err);
		console.log(err);
	}
}





const handleQuotesClick = async () =>
{
	try
	{
		console.log("Adding multiple quotes");

		const quotesToAddJSON = await document.getElementById('quotes-textarea').value;

		console.log(await quotesToAddJSON);

		const quotesToAdd = await JSON.parse(quotesToAddJSON);

		console.log(await quotesToAdd);

		//OK now we have the quotes we want to add, in the object quotesToAdd, so we can go about adding them:

		let totalQuotesAdded = 0;

		let finished = false;

		quotesToAdd.forEach(async (quote, index) =>
		{
			try
			{
				console.log("Trying to add quote: " + quote.quote);
				//run a POST request to add the quote:
				let response = await fetch('/quotes', {
					method: 'POST',
					body: JSON.stringify(quote),
					headers:
				    {"Content-Type": "application/json",}
				});

				response = await response.json();

				if (await response.success)
				{
					totalQuotesAdded++;
					//console.log("Posted a quote");
					if (totalQuotesAdded == quotesToAdd.length)
					{
						console.log("Done!");
						alert("Posted " + totalQuotesAdded + " quotes");
					}
					console.log(index);
					console.log(totalQuotesAdded);
				}
				else
				{
					throw("Failed to POST quote: " + quote.quote);
				}
			}
			catch(err2)
			{
				alert(err2);
				console.log(err2);
			}
		});
	}
	catch(err)
	{
		alert(err);
		console.log(err);
	}
}