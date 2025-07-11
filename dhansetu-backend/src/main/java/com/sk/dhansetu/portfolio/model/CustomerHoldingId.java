//package com.sk.dhansetu.portfolio.model; // use the same package as your entity
//
//import java.io.Serializable;
//import java.util.Objects;
//
//public class CustomerHoldingId implements Serializable {
//    private Long customerId;
//    private String scripName;
//
//    public CustomerHoldingId() {}
//
//    public CustomerHoldingId(Long customerId, String scripName) {
//        this.customerId = customerId;
//        this.scripName = scripName;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof CustomerHoldingId)) return false;
//        CustomerHoldingId that = (CustomerHoldingId) o;
//        return Objects.equals(customerId, that.customerId) &&
//               Objects.equals(scripName, that.scripName);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(customerId, scripName);
//    }
//
//    // Optional getters/setters (can be used if needed)
//}
