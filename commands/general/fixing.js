module.exports = [
	{
		name: "select",
		code: `
    Select an option.
    
    $addSelectMenu[1;helpCustomID;This placeholder won't show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:test1:no:👋;B Option: :test2:no:👋]
    `
	},
	{
		name: "helpCustomID",
		prototype: "selectMenu",
		code: `
    $interactionUpdate[A option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:test1:Either this.:false}{selectMenuOptions:This won't show up either.:test2:cause menu disabled.:false}}}]

    $onlyIf[$interactionData[values[0]]==test1;]
    `
	},
	{
		name: "helpCustomID",
		prototype: "selectMenu",
		code: `
    $interactionUpdate[B option's response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:test1:Either this.:false}{selectMenuOptions:This won't show up either.:test2:cause menu disabled.:false}}}]

    $onlyIf[$interactionData[values[1]]==test2;]
	$interactionData
    `
	}
];
