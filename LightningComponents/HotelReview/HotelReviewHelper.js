({
	executeControllerMethod : function(component) {
		var classMethod = component.get("c.getExistingHotelRecords");
        classMethod.setCallback(this,function(response){
            if(response.state === 'SUCCESS'){
                component.set("v.hotels",response.getReturnValue());
            }
        });
        $A.enqueueAction(classMethod);
	}
})
