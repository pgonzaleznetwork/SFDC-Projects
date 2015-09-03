public class HotelReviewerClass {
    
    @AuraEnabled
    public static List<Hotel__c> getExistingHotelRecords(){
        return [SELECT Id,Name,Website__c,Phone__c,Visit_Date__c FROM Hotel__c];
    }
    
    @AuraEnabled
    public static void createNewHotel(Hotel__c hotelRecord){
        insert hotelRecord;
    }


}
