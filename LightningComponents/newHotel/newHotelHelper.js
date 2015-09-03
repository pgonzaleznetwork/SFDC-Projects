({
	callControllerMethod : function(component,newHotel) {
        
		var classMethod = component.get("c.createNewHotel");
        classMethod.setParams({
            "hotelRecord":newHotel
        });
        classMethod.setCallback(this,function(response){
            if(response.state === "SUCCESS"){
                component.set("v.hotelCreatedSuccess",true);
            }else{
                component.set("v.hotelCreatedFail",true);
            }
        });
        $A.enqueueAction(classMethod);
	}
})
