package com.traveltehnology.ibe.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;
import java.util.Objects;

@Entity
public class Flights {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long flight_id;

    private String from_location;

    private String from_iata_code;

    private String to_location;

    private String to_iata_code;

    private Date leaving_data;

    private Time fly_leave_begin;

    private Time fly_leave_end;

    private Date returing_data;

    private Time fly_retur_begin;

    private Time fly_retur_end;

    private double price;

    private String flight_name_company;

    private String flight_icon_company;

    public long getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(long flight_id) {
        this.flight_id = flight_id;
    }

    public String getFrom_location() {
        return from_location;
    }

    public void setFrom_location(String from_location) {
        this.from_location = from_location;
    }

    public String getFrom_iata_code() {
        return from_iata_code;
    }

    public void setFrom_iata_code(String from_iata_code) {
        this.from_iata_code = from_iata_code;
    }

    public String getTo_location() {
        return to_location;
    }

    public void setTo_location(String to_location) {
        this.to_location = to_location;
    }

    public String getTo_iata_code() {
        return to_iata_code;
    }

    public void setTo_iata_code(String to_iata_code) {
        this.to_iata_code = to_iata_code;
    }

    public Date getLeaving_data() {
        return leaving_data;
    }

    public void setLeaving_data(Date leaving_data) {
        this.leaving_data = leaving_data;
    }

    public Time getFly_leave_begin() {
        return fly_leave_begin;
    }

    public void setFly_leave_begin(Time fly_leave_begin) {
        this.fly_leave_begin = fly_leave_begin;
    }

    public Time getFly_leave_end() {
        return fly_leave_end;
    }

    public void setFly_leave_end(Time fly_leave_end) {
        this.fly_leave_end = fly_leave_end;
    }

    public Date getReturing_data() {
        return returing_data;
    }

    public void setReturing_data(Date returing_data) {
        this.returing_data = returing_data;
    }

    public Time getFly_retur_begin() {
        return fly_retur_begin;
    }

    public void setFly_retur_begin(Time fly_retur_begin) {
        this.fly_retur_begin = fly_retur_begin;
    }

    public Time getFly_retur_end() {
        return fly_retur_end;
    }

    public void setFly_retur_end(Time fly_retur_end) {
        this.fly_retur_end = fly_retur_end;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getFlight_name_company() {
        return flight_name_company;
    }

    public void setFlight_name_company(String flight_name_company) {
        this.flight_name_company = flight_name_company;
    }

    public String getFlight_icon_company() {
        return flight_icon_company;
    }

    public void setFlight_icon_company(String flight_icon_company) {
        this.flight_icon_company = flight_icon_company;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Flights)) return false;
        Flights flights = (Flights) o;
        return getFlight_id() == flights.getFlight_id() &&
                Double.compare(flights.getPrice(), getPrice()) == 0 &&
                Objects.equals(getFrom_location(), flights.getFrom_location()) &&
                Objects.equals(getFrom_iata_code(), flights.getFrom_iata_code()) &&
                Objects.equals(getTo_location(), flights.getTo_location()) &&
                Objects.equals(getTo_iata_code(), flights.getTo_iata_code()) &&
                Objects.equals(getLeaving_data(), flights.getLeaving_data()) &&
                Objects.equals(getFly_leave_begin(), flights.getFly_leave_begin()) &&
                Objects.equals(getFly_leave_end(), flights.getFly_leave_end()) &&
                Objects.equals(getReturing_data(), flights.getReturing_data()) &&
                Objects.equals(getFly_retur_begin(), flights.getFly_retur_begin()) &&
                Objects.equals(getFly_retur_end(), flights.getFly_retur_end()) &&
                Objects.equals(getFlight_name_company(), flights.getFlight_name_company()) &&
                Objects.equals(getFlight_icon_company(), flights.getFlight_icon_company());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getFlight_id(), getFrom_location(), getFrom_iata_code(),
                getTo_location(), getTo_iata_code(), getLeaving_data(), getFly_leave_begin(),
                getFly_leave_end(), getReturing_data(), getFly_retur_begin(),
                getFly_retur_end(), getPrice(), getFlight_name_company(),
                getFlight_icon_company());
    }
}