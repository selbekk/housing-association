# Application structure

This document is meant to be a working document while I figure out what kind of
domain model structure I should implement.

This document will outline the main components of this application, what they
are for, and how they interconnect.

The discussion will then move towards which technologies will be chosen to run
this in the cloud.

Lastly, persistence structure will be touched upon briefly.

## Main domain objects

These are the main domain objects that will model this system.

### Organization

An organization is a single housing association, and is one of the base elements
in the app itself. Users, units, tenants, everyone will belong to an
organization in some way or other.

The following fields will be implemented for the first release:

    - id                # a unique numerical(?) identifier
    - name              # the display name of the housing association
    - address           # only one address for now - the postal address
    - postalCode        # ~
    - city              # ~
    - country           # ~
    - type              # enumerated type (large, medium, small, building etc)

There are - of course - tons of more fields that will be needed in a final
version, but this is a good foundation for later.

### User

#### Role

There will be several different roles a user can have, depending on his or her
relationship with the application

The following roles will be implemented for the first release:

    - ADMIN                     # an application administrator
    - ORGANIZATION_ADMIN        # an organization administrator
    - UNIT_OWNER                # the owner of a housing unit
    - UNIT_TENANT               # the tenant of a housing unit

### Housing Unit

A housing unit is a house, an apartment or basically any 'piece' of a housing
organization.

The following fields will be implemented for the first release:

    - id                # a unique identifier
    - streetName        # the address of the unit
    - streetNumber      # the street number of the unit
    - floor             # the floor of the main entrance
    - apartmentNumber   # the apartment ID (legally)

 More fields will be added
