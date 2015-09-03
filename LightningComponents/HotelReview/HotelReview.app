<aura:application controller="HotelReviewerClass">
    <ltng:require styles="/resource/bootstrapworks"/>
    <aura:attribute name="hotels" type="Hotel__c[]"/>
    <div class="bootstrap-sf1">
        <div class="navbar navbar-inverse">
	        <div class="navbar-header">
	            <a href="#" class="navbar-brand">My Hotel Reviews - <c:author FirstName="Pablo" year="2015"/></a>
        	</div>
         </div>
    </div>
    <c:newHotel />
    <br></br><br></br>
    <ui:button label="Show Visited Hotels" press="{!c.showHotels}"/>
    <br></br><br></br>
    <aura:iteration items="{!v.hotels}" var="hotel">
        <c:visitedHotels hotel="{!hotel}"/>
    </aura:iteration>
</aura:application>
