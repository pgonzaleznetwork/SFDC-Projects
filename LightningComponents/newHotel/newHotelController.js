({
	submitHotel : function(component, event, helper) {
       var newHotel = component.get("v.newHotel");
       helper.callControllerMethod2(component,newHotel);
	}
})
