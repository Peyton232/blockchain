// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: channel/channel.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	types "github.com/sonr-io/blockchain/x/object/types"
	types1 "github.com/sonr-io/blockchain/x/registry/types"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Channel struct {
	// Label is human-readable name of the channel.
	Label string `protobuf:"bytes,1,opt,name=label,proto3" json:"label,omitempty"`
	// Description is a human-readable description of the channel.
	Description string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	// Did is the identifier of the channel.
	Did string `protobuf:"bytes,4,opt,name=did,proto3" json:"did,omitempty"`
	// RegisterdObject is the object that is registered as the payload for the channel.
	RegisteredObject *types.ObjectDoc `protobuf:"bytes,5,opt,name=registered_object,json=registeredObject,proto3" json:"registered_object,omitempty"`
}

func (m *Channel) Reset()         { *m = Channel{} }
func (m *Channel) String() string { return proto.CompactTextString(m) }
func (*Channel) ProtoMessage()    {}
func (*Channel) Descriptor() ([]byte, []int) {
	return fileDescriptor_3d995edae05c9a88, []int{0}
}
func (m *Channel) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Channel) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Channel.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Channel) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Channel.Merge(m, src)
}
func (m *Channel) XXX_Size() int {
	return m.Size()
}
func (m *Channel) XXX_DiscardUnknown() {
	xxx_messageInfo_Channel.DiscardUnknown(m)
}

var xxx_messageInfo_Channel proto.InternalMessageInfo

func (m *Channel) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

func (m *Channel) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Channel) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *Channel) GetRegisteredObject() *types.ObjectDoc {
	if m != nil {
		return m.RegisteredObject
	}
	return nil
}

// ChannelMessage is a message sent to a channel.
type ChannelMessage struct {
	// Owner is the peer that originated the message.
	Peer *types1.Peer `protobuf:"bytes,1,opt,name=peer,proto3" json:"peer,omitempty"`
	// Did is the identifier of the channel.
	Did string `protobuf:"bytes,2,opt,name=did,proto3" json:"did,omitempty"`
	// Data is the data being sent.
	Object *types.ObjectDoc `protobuf:"bytes,3,opt,name=object,proto3" json:"object,omitempty"`
	// Metadata is the metadata associated with the message.
	Metadata map[string]string `protobuf:"bytes,4,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (m *ChannelMessage) Reset()         { *m = ChannelMessage{} }
func (m *ChannelMessage) String() string { return proto.CompactTextString(m) }
func (*ChannelMessage) ProtoMessage()    {}
func (*ChannelMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_3d995edae05c9a88, []int{1}
}
func (m *ChannelMessage) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ChannelMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ChannelMessage.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ChannelMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChannelMessage.Merge(m, src)
}
func (m *ChannelMessage) XXX_Size() int {
	return m.Size()
}
func (m *ChannelMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_ChannelMessage.DiscardUnknown(m)
}

var xxx_messageInfo_ChannelMessage proto.InternalMessageInfo

func (m *ChannelMessage) GetPeer() *types1.Peer {
	if m != nil {
		return m.Peer
	}
	return nil
}

func (m *ChannelMessage) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *ChannelMessage) GetObject() *types.ObjectDoc {
	if m != nil {
		return m.Object
	}
	return nil
}

func (m *ChannelMessage) GetMetadata() map[string]string {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func init() {
	proto.RegisterType((*Channel)(nil), "sonrio.sonr.channel.Channel")
	proto.RegisterType((*ChannelMessage)(nil), "sonrio.sonr.channel.ChannelMessage")
	proto.RegisterMapType((map[string]string)(nil), "sonrio.sonr.channel.ChannelMessage.MetadataEntry")
}

func init() { proto.RegisterFile("channel/channel.proto", fileDescriptor_3d995edae05c9a88) }

var fileDescriptor_3d995edae05c9a88 = []byte{
	// 372 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0x4d, 0x4b, 0xf3, 0x40,
	0x10, 0xc7, 0xbb, 0xe9, 0xcb, 0xf3, 0x3c, 0x1b, 0x1e, 0xa9, 0xa9, 0x42, 0x08, 0x18, 0x42, 0x4f,
	0xbd, 0x74, 0x83, 0x15, 0x41, 0xf4, 0xe6, 0x0b, 0x82, 0x50, 0x94, 0x1c, 0xbd, 0xc8, 0x26, 0x19,
	0xda, 0xb5, 0x69, 0x36, 0x6c, 0xb6, 0x62, 0xbe, 0x85, 0x17, 0xcf, 0x7e, 0x1d, 0x8f, 0x3d, 0x7a,
	0x94, 0xf6, 0x8b, 0x48, 0xb2, 0x5b, 0xdb, 0x82, 0x07, 0x4f, 0xff, 0xdd, 0xf9, 0xcf, 0x6c, 0x7e,
	0x33, 0x19, 0xbc, 0x1f, 0x8d, 0x69, 0x9a, 0x42, 0xe2, 0x6b, 0x25, 0x99, 0xe0, 0x92, 0x5b, 0x9d,
	0x9c, 0xa7, 0x82, 0x71, 0x52, 0x0a, 0xd1, 0x96, 0xd3, 0xe1, 0xe1, 0x23, 0x44, 0xd2, 0x57, 0xa2,
	0x32, 0x9d, 0x8e, 0x80, 0x11, 0xcb, 0xa5, 0x28, 0xfc, 0x0c, 0x40, 0xa8, 0x60, 0xf7, 0x0d, 0xe1,
	0x3f, 0x17, 0xaa, 0xca, 0xda, 0xc3, 0xcd, 0x84, 0x86, 0x90, 0xd8, 0xc8, 0x43, 0xbd, 0x7f, 0x81,
	0xba, 0x58, 0x1e, 0x36, 0x63, 0xc8, 0x23, 0xc1, 0x32, 0xc9, 0x78, 0x6a, 0x1b, 0x95, 0xb7, 0x19,
	0xb2, 0xda, 0xb8, 0x1e, 0xb3, 0xd8, 0x6e, 0x54, 0x4e, 0x79, 0xb4, 0x6e, 0xf0, 0xae, 0xfa, 0x18,
	0x08, 0x88, 0x1f, 0x14, 0x85, 0xdd, 0xf4, 0x50, 0xcf, 0x1c, 0x1c, 0x90, 0x4d, 0x60, 0x0d, 0x78,
	0x5b, 0xc9, 0x25, 0x8f, 0x82, 0xf6, 0xba, 0x4e, 0x05, 0xbb, 0xaf, 0x06, 0xde, 0xd1, 0x84, 0x43,
	0xc8, 0x73, 0x3a, 0x02, 0x8b, 0xe0, 0x46, 0xd9, 0x42, 0xc5, 0x69, 0x0e, 0x9c, 0xad, 0x17, 0x57,
	0x4d, 0x92, 0x3b, 0x00, 0x11, 0x54, 0x79, 0x2b, 0x40, 0x63, 0x0d, 0x78, 0x8c, 0x5b, 0x9a, 0xaa,
	0xfe, 0x1b, 0x2a, 0x9d, 0x6c, 0x0d, 0xf1, 0xdf, 0x29, 0x48, 0x1a, 0x53, 0x49, 0xed, 0x86, 0x57,
	0xef, 0x99, 0x83, 0x43, 0xf2, 0xc3, 0xfc, 0xc9, 0x36, 0x2f, 0x19, 0xea, 0x9a, 0xab, 0x54, 0x8a,
	0x22, 0xf8, 0x7e, 0xc2, 0x39, 0xc3, 0xff, 0xb7, 0xac, 0x12, 0x74, 0x02, 0x85, 0x9e, 0x7f, 0x79,
	0x2c, 0xff, 0xc9, 0x13, 0x4d, 0x66, 0xa0, 0xe1, 0xd5, 0xe5, 0xd4, 0x38, 0x41, 0xe7, 0xd7, 0xef,
	0x0b, 0x17, 0xcd, 0x17, 0x2e, 0xfa, 0x5c, 0xb8, 0xe8, 0x65, 0xe9, 0xd6, 0xe6, 0x4b, 0xb7, 0xf6,
	0xb1, 0x74, 0x6b, 0xf7, 0xfd, 0x11, 0x93, 0xe3, 0x59, 0x48, 0x22, 0x3e, 0xf5, 0x4b, 0xac, 0x3e,
	0xe3, 0x7e, 0x98, 0xf0, 0x68, 0x12, 0x8d, 0x29, 0x4b, 0xfd, 0xe7, 0xd5, 0x06, 0xf9, 0xb2, 0xc8,
	0x20, 0x0f, 0x5b, 0xd5, 0x26, 0x1c, 0x7d, 0x05, 0x00, 0x00, 0xff, 0xff, 0xd0, 0x52, 0xb6, 0x29,
	0x61, 0x02, 0x00, 0x00,
}

func (m *Channel) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Channel) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Channel) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.RegisteredObject != nil {
		{
			size, err := m.RegisteredObject.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintChannel(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Label) > 0 {
		i -= len(m.Label)
		copy(dAtA[i:], m.Label)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Label)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ChannelMessage) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ChannelMessage) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ChannelMessage) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Metadata) > 0 {
		for k := range m.Metadata {
			v := m.Metadata[k]
			baseI := i
			i -= len(v)
			copy(dAtA[i:], v)
			i = encodeVarintChannel(dAtA, i, uint64(len(v)))
			i--
			dAtA[i] = 0x12
			i -= len(k)
			copy(dAtA[i:], k)
			i = encodeVarintChannel(dAtA, i, uint64(len(k)))
			i--
			dAtA[i] = 0xa
			i = encodeVarintChannel(dAtA, i, uint64(baseI-i))
			i--
			dAtA[i] = 0x22
		}
	}
	if m.Object != nil {
		{
			size, err := m.Object.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintChannel(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintChannel(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0x12
	}
	if m.Peer != nil {
		{
			size, err := m.Peer.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintChannel(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintChannel(dAtA []byte, offset int, v uint64) int {
	offset -= sovChannel(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Channel) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Label)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	if m.RegisteredObject != nil {
		l = m.RegisteredObject.Size()
		n += 1 + l + sovChannel(uint64(l))
	}
	return n
}

func (m *ChannelMessage) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Peer != nil {
		l = m.Peer.Size()
		n += 1 + l + sovChannel(uint64(l))
	}
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovChannel(uint64(l))
	}
	if m.Object != nil {
		l = m.Object.Size()
		n += 1 + l + sovChannel(uint64(l))
	}
	if len(m.Metadata) > 0 {
		for k, v := range m.Metadata {
			_ = k
			_ = v
			mapEntrySize := 1 + len(k) + sovChannel(uint64(len(k))) + 1 + len(v) + sovChannel(uint64(len(v)))
			n += mapEntrySize + 1 + sovChannel(uint64(mapEntrySize))
		}
	}
	return n
}

func sovChannel(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozChannel(x uint64) (n int) {
	return sovChannel(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Channel) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowChannel
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Channel: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Channel: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Label", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Label = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RegisteredObject", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.RegisteredObject == nil {
				m.RegisteredObject = &types.ObjectDoc{}
			}
			if err := m.RegisteredObject.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipChannel(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthChannel
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *ChannelMessage) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowChannel
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ChannelMessage: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ChannelMessage: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Peer", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Peer == nil {
				m.Peer = &types1.Peer{}
			}
			if err := m.Peer.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Object", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Object == nil {
				m.Object = &types.ObjectDoc{}
			}
			if err := m.Object.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Metadata", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthChannel
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthChannel
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Metadata == nil {
				m.Metadata = make(map[string]string)
			}
			var mapkey string
			var mapvalue string
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowChannel
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					wire |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				fieldNum := int32(wire >> 3)
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowChannel
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthChannel
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthChannel
					}
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var stringLenmapvalue uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowChannel
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapvalue |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapvalue := int(stringLenmapvalue)
					if intStringLenmapvalue < 0 {
						return ErrInvalidLengthChannel
					}
					postStringIndexmapvalue := iNdEx + intStringLenmapvalue
					if postStringIndexmapvalue < 0 {
						return ErrInvalidLengthChannel
					}
					if postStringIndexmapvalue > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = string(dAtA[iNdEx:postStringIndexmapvalue])
					iNdEx = postStringIndexmapvalue
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipChannel(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if (skippy < 0) || (iNdEx+skippy) < 0 {
						return ErrInvalidLengthChannel
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Metadata[mapkey] = mapvalue
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipChannel(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthChannel
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipChannel(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowChannel
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowChannel
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthChannel
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupChannel
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthChannel
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthChannel        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowChannel          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupChannel = fmt.Errorf("proto: unexpected end of group")
)
